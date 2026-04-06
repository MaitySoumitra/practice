const Project = require('../models/Project');
const User = require('../models/User');
const createProject=async(req, res)=>{
   const {name, members}=req.body;
   const ownerId=req.user._id
   try{
    const newProject=new Project({
        name: name,
        owner:ownerId,
        members: [ownerId, ...(members|| [])]
    })
    await newProject.save();

    await User.updateMany(
        {_id:{$in:newProject.members}},
        {$addToSet:{memberOfBoards:newProject._id}}
    )
    const populatedProject=await Project.findById(newProject._id)
    .populate('owner', 'name email')
    .populate('members', 'name email role')
    return res.status(201).json(populatedProject)
   }
   catch(error){
    return res.status(500).json({message: "internal server error"})
   }
}

const projectForUser=async(req, res)=>{
    try{
        const project=await Project.find({
            members: req.user._id
        })
        .select('_id name owner members')
        .populate('owner', 'name email')
        .populate('members', 'name email role')
        return res.status(200).json(project)
    }
    catch(error){
        return res.status(500).json({message: "Internal server error"})
    }
}

const getProjectById=async(req, res)=>{
    const {projectId}=req.params;
    try{
        const project=await Project.findById(projectId)
        .populate({
            path:'columns',
            populate:{
                path:'tasks',
                model: 'Model',
                populate:{
                    path:'assignedTo',
                    model:'User',
                    select: 'name email role'

                }
            }
        })
        .populate('owner', 'name email')
        .populate('members', 'name email role')

        if(!project){
            return res.status(404).json({message: "project is not found"})
        }
        const isMember=Array.isArray(project.members) && project.members.some(member=>{
            member._id.toString() === req.user._id.toString()
        })

        if(!isMember){
            return res.status(403).json({message: "The user must be board members"})
        }

        return res.status(200).json(project)
    }
    catch(error){
        return res.status(500).json({message: "Internal server error"})
    }
}