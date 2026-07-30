import { useState } from "react"

interface UserType{
    id:number,
    name:string,
    active:boolean
}
export const UserActive = () => {
    const [user, setUser]=useState<UserType[]>([
        {id:1, name: "Raju", active: false},
        {id:2, name: "Bumba", active: false},
        {id:3, name: "Bablu", active: false}
    ])

    const activeUsers=(id:number)=>{
        setUser((prevUser)=>
            prevUser.map((user)=>
            user.id===id?{...user, active:true}: user)
        )
    }
  return (
    <>
    {user.map((u)=>(
        <div key={u.id}>
            <p>{u.name}--🟢{u.active? "Active": "Inactive"}</p>
            {
                !u.active && ( <button onClick={()=>activeUsers(u.id)}>Active</button>)
            }
        </div>
    ))}
    </>
  )
}
