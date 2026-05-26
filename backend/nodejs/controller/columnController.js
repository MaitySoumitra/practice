const Column = require('../models/Column')
const Project = require('../models/Project')

const createColumn = async (req, res) => {
    const { projectId } = req.params
    const { name } = req.body
    try {
        const project = await Project.findById(projectId).select('members')
        if (!project) return res.status(404).json({ message: "project not found" })
        const isMember = project.members.some(member => member._id.toString() !== req.user._id.toString())
        if (!isMember) return res.status(404).json({ message: "member is not associate with this board" })
        const newColumn = new Column({
            name,
            board: boardId
        })
        await newColumn.save()
        await Project.findByIdAndUpdate({
            boardId,
            $push:{columns:newColumn.id}
        })
        res.status(201).json({message:"created column successfully", newColumn})

    }
    catch(error){
        console.log("Something went wrong", error)
        return res.status(500).json({message: "Internal server error"})
    }
}