const User = require("../models/User");


const Max_age = 3 * 24 * 60 * 60 * 1000

const cookieOptions = {
    httpOnly: true,
    maxAge: Max_age,
    secure: process.env.NODE_ENV === "production",
    sameSite: 'Strict'

}
const createUser = async (req, res) => {
    const { name, email, role, password } = req.body;
    const creatingRole = req.user.role;
    if (role === "super-admin") {
        return res.status(403).json({ message: "super admin user only create seeds" })
    }
    if (role === "admin" && creatingRole === "admin") {
        return res.status(403).json({ message: "admin canont create another admin account" })
    }
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(403).json({ message: "User allready exist" })
        }
        const newUser = { name, email, password, role }
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
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "Email is not found" })
        }
        const isMatchPassword = await bcrypt.compare(password, user.password)
        if (!isMatchPassword) return res.status(404).json({ message: "Password is invalid" })
        const token = user.generateJwt()
        res.cookie("authToken", token, cookieOptions)
    }
    catch (error) {
        console.log("server error", error)
        res.status(500).json({ message: "Internal server error" })
        res.status(200).json({message: "LogOut Successfully"})
    }
}
const logoutUser=async(req, res)=>{
    await res.clearCokies('authToken', cookieOptions)
}