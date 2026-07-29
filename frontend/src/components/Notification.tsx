import { useState } from "react"

interface Notification{
    id:number,
    message:string
}

export const Notification = () => {
    const [notification, setNotification]=useState<Notification[]>([])
    const addNotification=(message:string)=>{
        setNotification((prev)=>[
            ...prev, {id:Date.now(),message}
        ])
    }
  return (
    <>
    <button onClick={()=> addNotification("New Order received")}>Add</button>
    <ul>
        {notification.map((n)=>(
            <li key={n.id}>
                {n.message}
            </li>
        ))}
    </ul>
    </>
  )
}
