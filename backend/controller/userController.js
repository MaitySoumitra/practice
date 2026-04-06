const createUser= async(req, res)=>{
    const {name, email, role, password}=req.body;
    const creatingRole=req.user.role;
    if(role==="super-admin"){
        return res.status(403).json({message:"super admin user only create seeds"})
    }
    if(role==="admin"  && creatingRole==="admin" ){
        return res.status(403).json({message:"admin canont create another admin account"})
    }
    try{
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.status(403).json({message: "User allready exist"})
        }
        const newUser={name, email, password, role}
        await newUser.save()
        res.status(201).json({message:"User created successfully"})
        
    }
    catch(error){
        return res.status(500).json({message:"Internal server error"})
    }

}