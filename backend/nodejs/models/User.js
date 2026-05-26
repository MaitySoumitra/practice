const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { Schema } = mongoose


const userSchemna = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["super-admin", "admin", "Web Developer", "UI & UX Designer", "Qa Analyst"] },
    profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile"
    },
    boardOfMembers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Board"
    }
}, { timestamps: true })

userSchemna.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt)
    next()
})

userSchemna.methods.generateJWT=function(){
    const token=jwt.sign({id:this._id, role: this.role}, process.env.JWT_SECRET,{expiresIn:'3d'})
    return token
}

module.exports=mongoose.Model("User", userSchemna)