const Board = require("../models/Project");
const Column = require("../models/Column");
const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Project = require("../models/Project");

const registerUser = async (req, res) => {
    const { name, role, email, password } = req.body
    const creatingRole = req.user.role;
    if (role === "super-admin") {
        return res.status(403).json({ message: "Super admin only create there account via seeds only" })
    }
    if (creatingRole === "admin" && admin === "admin") {
        return res.status(403).json({ message: "Admin can not create another admin account" })
    }
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(403).json({ message: "User already have an account" })
        }
        const newUser = new User({ name, email, password, role })
        await newUser.save()
        res.status(201).json({
            message: `User creates successfully user Name:${newUser.name}`, user: {
                id: newUser._id,
                email: newUser.email,
                role: newUser.role
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }

}
const registerNewUser = async (req, res) => {
    const { name, email, role, password } = req.body
    const existingRole = req.user.role
    if (role === "super-admin") {
        return res.status(403).json({ message: "super-admin only crete account via seeds only" })
    }
    if (existingRole === "admin" && role === "admin") {
        return res.status(403).json({ message: "admin cannot create another admin account" })
    }
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(403).json({ message: "User already have an account" })
        }
        const newUser = new User({ name, email, role, password })
        await newUser.save()
        res.status(201).json({ message: "User created successfully" })
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = User.findOne({ email })
        if (!user) return res.status(404).json({ message: "Invalid credentails" })
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) return res.status(404).json({ message: "Invalid Credentials" })
        const token = user.generateJwt()
        res.cookie("authToken", token, cookieOptions)
    }
    catch (error) {
        console.log("server error", error);
        return res.status(500).json({ message: "Internal Server error" })
    }
}

const logoutUser = async (req, res) => {
    await res.clearCokies('authToken', cookieOptions)
    res.status(200).json({ message: "Logout successfully" })
}

const getProfile = (req, res) => {
    res.status(200).json({
        message: "Profile data",
        user: req.user
    })
}

const SearchUsers = async (req, res) => {
    const { query, boardId } = req.query;
    if (!query || query.length < 2) {
        return res.status(400).json({ message: "atltest 2 character is required for search" })
    }
    try {
        let search = {
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        }
        const users = await User.find(search)
            .select('_id name email role')
            .limit(10)
        res.status(200).json(users)
    }
    catch (error) {
        console.log("server error", error)
        res.status(500).json({ message: "Internal Server error" })
    }
}

const Max_age = 3 * 24 * 60 * 60 * 1000

const cookieOptions = {
    httpOnly: true,
    maxAge: Max_age,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'Strict'

}


const createBoard = async (req, res) => {
    const { name, members } = req.body
    const ownerId = req.user._id
    try {
        const newBoard = new Board({
            name,
            owner: ownerId,
            members: [ownerId, ...(members || [])]
        })
        await newBoard.save()
        await User.updateMany(
            { _id: { $in: newBoard.members } },
            { $addToSet: { memberOfBoards: newBoard._id } }
        )
        res.status(201).json(newBoard)

    }
    catch (error) {
        console.log("something went wrong", error)
        res.status(500).json({ message: "Something erron in Internal server" })
    }

}

const getBoardsForUser = async (req, res) => {
    try {
        const boards = await Board.find({
            members: req.user._id
        })
            .select("_id name owner members")
            .populate("owner", "name email role")
            .populate("members", "name email role")

        res.status(200).json(boards)
    }
    catch (error) {
        res.status(500).json({ message: "Internale server error" })
    }
}

const getboardById = async (req, res) => {
    const boardId = req.params.id
    try {
        const board = await Board.findById(boardId)
            .populate({
                path: 'columns',
                populate: {
                    path: tasks,
                    model: Task,
                    populate: {
                        path: 'assignedTo',
                        model: 'User',
                        select: 'name email role profilepicture'
                    }
                }
            })
            .populate("owner", "name email")
            .populate("members", "name email role")
        if (!board) return res.status(404).json({ message: "Board not found" })
        const isMember = Array.isArray(board.members) && board.members.some(member => member?._id?.toString() === req.user._id?.toString())
        if (!isMember) return res.status(403).json({ message: "Access denied: You are not member of Board" })
        res.status(200).json(board)

    }
    catch (error) {
        console.log("something went wrong please check logic", error)
        res.status(500).json({ message: "Internal server error" })
    }
}

const addMemberToBoard = async (req, res) => {
    const { boardId } = req.params
    const { memberId } = req.body
    try {
        const board = await Board.findById(boardId)
        if (!board) return res.status(404).json({ message: 'Board not found' })
        if (board.members.includes(memberId)) return res.status(403).status({ message: "Member already exist on Board" })
        board.members.push(memberId)
        await board.save()

        await User.findByIdAndUpdate(memberId, {
            $addToSet: { memberOfBoards: board._id }
        })

        await board.populate('members', 'name email role')
        res.status(200).json()
    }
    catch (error) {
        console.log("Something went wrong", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

const createColumn = async (req, res) => {
    const boardId = req.params
    const { name } = req.body
    try {
        const board = await User.findById(boardId).select('members')
        if (!board) return res.status(404).json({ message: "board not found" })
        const isMember = board.members.some(member => member._id.toString() === req.user._id.toString())
        if (!isMember) return res.status(404).json({ message: "member is not accociate with this board" })
        const newColumn = new Column({
            name, board: boardId
        })
        await newColumn.save()
        await Board.findByIdAndUpdate({
            boardId,
            $push: { columns: newColumn._id }
        })
        res.status(201).json({ message: "created column successfully", newColumn })

    }
    catch (error) {
        console.log('Something went wrong', error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

const fetchColumn = async (req, res) => {

    try {
        const columns = await Board.find({ board: req.params.boardId })
        res.status(200).json(columns)

    }
    catch (error) {
        console.log("something wen twrong", error)
        res.status(500).json({ message: "Internal server error for fetching columns" })
    }
}

const deleteColumn = async (req, res) => {
    const { columnId } = req.params
    try {
        const column = await Column.findById(columnId)
        if (!column) return res.status(404).json({ message: "Column is not found" })

        const board = await Board.findById(column.board).select('members')
        if (!board) return res.status(404).json({ message: "Board not found" })
        const isMember = board.members.some(member => member._id.toString() === req.user._id.toString())
        if (!isMember) return res.status(403).json({ message: "Deleteing Column has not access " })

        await Board.findByIdAndUpdate(column.board, {
            $pull: { columns: columnId }
        })
        await Task.deleteMany({ column: columnId })

        await Column.findByIdAndDelete(columnId)
        res.status(200).json({ message: "Deleted column successfully" })
    }
    catch (error) {
        console.log("something went wrong", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

const searchUsers = async (req, res) => {
    const { query, boardId } = req.query
    if (!query || query.length < 2) {
        return res.status(400).json({ message: "search field require atleast two character" })
    }
    try {
        let search = {
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        }
        if (boardId) {
            const board = await Board.findById(boardId)
            if (!board) {
                return res.status(404).json({ message: "Board not found" })
            }
            search._id = { $in: board.members }


        }
        const users = await User.find(search)
            .select('_id name email role')
            .limit(10)
            .lean()
        res.status(200).json(users)
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

const createTask = async (req, res) => {
    const { boardId, columnId } = req.params
    const { title, description, assignedTo, startDate, dueDate, priority } = req.body
    try {
        const board = await Board.findById(boardId).select('members')
        if (!board) {
            return res.status(404).json({ message: "board not found" })
        }
        const isMember = board.members.some(member => member._id.toString() === req.user._id.toString())
        if (!isMember) {
            return res.status(403).json({ message: "Access Denied: You must be member" })
        }
        const newTask = new Task({
            title,
            description,
            assignedTo,
            priority,
            startDate,
            dueDate,
            board: boardId,
            column: columnId,
            activityLog: [{
                user: req.user._id,
                action: 'Task created'
            }],
            _userContext: req.user._id

        })
        await newTask.save()
        await Column.findByIdAndUpdate(
            columnId,
            { $push: { task: newTask._id } },
            { new: true }
        )
        const populatedTask = await Task.findById(newTask._id)
            .populate('assignedTo', 'name email role')
        return res.status(201).json(populatedTask)

    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

const deletedBoard = async (req, res) => {

    try {
        const { boardId } = req.params;
        const board = await Board.findById({ boardId })

        if (!board) {
            return res.status(404).json({ message: "Board is not found" })
        }
        await Task.deleteMany({ board: boardId })

        await Column.deleteMany({ board: boardId })

        await User.updateMany(
            { memberOfBoards: boardId },
            { $pull: { memberOfBoards: boardId } }
        )
        await board.deleteOne()

        return res.status(200).json({ message: "Board are deleted successfully" })

    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error, could not deleted board" })
    }
}

const newLoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User account is not found" })
        }
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) {
            return res.status(404).json({ message: "Paswword is not matched" })
        }
        const token = user.generateJwt()
        await res.cookie("authToken", token, cookieOptions)
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }

}

const editProjectName = async (req, res) => {
    const { boardId } = req.params;
    const { name } = req.body
    if (!name || name.trim() === "") {
        return res.status(400).json({ message: "Board name is Required" })
    }
    try {
        const board = await Board.findById(boardId)
        if (!board) {
            return res.status(404).json({ message: "Board not found" })
        }
        if (board.owner._id.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Only board owner edit the board" })
        }
        board.name = name
        await board.save()

        const updateProject = await Project.findOne(board)
            .populate('owner', 'name email')
            .populate('member', 'name email role')
            .populate('column', '')
        return res.status(200).json(updateProject)
    }
    catch (error) {
        return res.status(500).json({ message: "Intenral server error" })
    }
}
const searchUser = async (req, res) => {
    const { query } = req.query
    if (!query && query.length < 2) {
        return res.status(403).json({ message: "Searching User atleast required two character" })
    }
    try {
        const search = {
            $or: [
                { $name: { $regex: query, $options: 'i' } },
                { $email: { $regex: query, $options: 'i' } }
            ]
        }
        const user = await User.find(search)
            .select('_id name email role')
            .limit(10)
            .lean()
        return res.status(200).json(user)
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

const getTask = async (req, res) => {

    try {
        const { scope, boardId, columnId } = req.params
        if (boardId && columnId) {
            const board = await Board.findById(boardId).select('members')
            if (!board) {
                return res.staus(404).json({ message: "Baord not found" })
            }
            if (!board.members.some(m => m.toString() !== req.user._id.toString())) {
                return res.status(403).json({ message: "Access Denied" })
            }
            const tasks = await Task.find({ board: boardId, column: columnId })
                .populate('assignedTo', 'name email role')
                .populate('comments.user', 'name')
                .populate('activitiesLog.user', 'name')
                .populate('attachments.uploadBy', 'name email')
                .sort({ position: 1 })
        }
        if (scope === "mine") {
            const tasks = await Task.find({ assignedTo: req.user._id })
                .populate('assignedTo', 'name email role')
                .populate('board', 'name')
                .populate('columns', 'name')
                .populate('comment.user', 'name')
                .populate('attachments.uploadBy', 'name email')
                .populate('activityLog.user', 'name')
                .sort({ createdAt: -1 })
            return res.status(200).json(tasks)
        }
    }
    catch(error){
        return res.status(500).json({message: "Internal server error"})
    }
}   