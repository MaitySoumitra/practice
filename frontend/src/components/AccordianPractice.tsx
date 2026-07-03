import { useState } from "react"


export const AccordianPractice = () => {
    const [openId, setOpenId]=useState(null)
      const data=[
        {id:1, title: "what is React?", content: "React is UI library"},
        {id:2, title: "What is State", content: "State manages data."},
        {id:3, title: "What is props", content: "props is passes data"}
    ]
    const toggleList=(id:any)=>{
        setOpenId(prev=>prev===id?null:id)
    }
  return (
    <div>
        {
            data.map((item)=>(
                <li key={item.id}>
                    <button onClick={()=>toggleList(item.id)}>{item.title}</button>
                    {openId===item.id &&(
                            <div>
                                {item.content}
                            </div>
                    )}
                </li>
            ))
        }
    </div>
  )
}
