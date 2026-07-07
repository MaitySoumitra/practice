import { useState } from "react"

interface todoType{
    id:number,
    text:string,
    completed:boolean
}

export const NewTodo = () => {
    const [todos, setTodos]=useState<todoType[]>([])
    const [input, setInput]=useState('')
    const [filter, setFilter]=useState<"All"| "Active"| "Completed">("All")

    const addTodo=()=>{
        const newTodo={
            id:Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput('')
    }
    const toggleTodo=(id:any)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo, completed:!todo.completed}:todo))
    }
    const deleteTodo=(id:any)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
    const filterTodos=todos.filter((item)=>{
        if(filter==="Active") return !item.completed
        if(filter==="Completed") return item.completed
        return true
    })


  return (
    <div className="flex flex-col item-center justify-center max-w-[1440px] mx-auto min-h-full">
        <div className="space-x-5">
            <input className="" type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
        <select onChange={(e)=>setFilter(e.target.value as "All"|"Active"|"Completed")}>
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
        </select>
        <div>
            {filterTodos.map((todo)=>(
                <div key={todo.id} className="space-x-6">
                   <span onClick={()=>toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed?'line-through':''}`}>
                    {todo.text}
                   </span> 
                   <button onClick={()=>deleteTodo(todo.id)}>❌</button>
                </div>
            ))}
        </div>

    </div>
  )
}
