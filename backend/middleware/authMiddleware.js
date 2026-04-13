const jwt = require('jsonwebtoken')
const User = require('../models/User')

const protect = async (req, res, next) => {
    let token
    if (req.cookies && req.cookies.authToken) {
        token = req.cookies.authToken
    }
    if (!token) {
        return res.status(401).json({ message: "Authntication is required" })
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decode.id)
        if (!req.user) {
            return res.status(404).json({ message: "User is not found" })

        }
        next()
    }
    catch (error) {
        console.error("something went wrong", error)
        return res.status(401).json({ message: 'Not authorised, token failed or expired' })
    }
}

const hasAdminPrivileges=(req, res, next)=>{
    if(req.user && (req.user.role==="super-admin" || req.user.role==="admin")){
        console.error("user error", req.user.role)

        next()
    }
    else{
        res.status(403).json({message:"Access denied: Admin previlleges required"})
    }
}

module.exports={protect, hasAdminPrivileges}