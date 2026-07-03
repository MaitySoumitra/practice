import { useState } from "react"

interface todoType {
    id: number,
    text: string,
    completed: boolean
}

export const TodoPracticeNew = () => {
    const [todos, setTodos] = useState<todoType[]>([])
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All")

    const addTodo = () => {
        const newtodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos([...todos, newtodo])
        setInput("")
    }
    const toggleTodo = (id: any) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )))
    }
    const deleteTodo = (id: any) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }

    const filterTodos = todos.filter((todo) => {
        if (filter === "Completed") return todo.completed
        if (filter === "Active") return !todo.completed
        return true
    })
    return (
        <div>
            <div className="space-x-2">
                <input className="p-3 border rounded-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="p-2 border rounded-lg" onClick={addTodo}>Add todo</button>
            </div>
            <select className="shadow-md rounded-md cursor-pointer p-2" onChange={(e) => setFilter(e.target.value as "All" | "Active" | "Completed")}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
            {filterTodos.map((todo) => (
                <div key={todo.id}>
                    
                    <button className={`${todo.completed?"line-through": ""}`} onClick={()=>toggleTodo(todo.id)}><p>{todo.text}</p>✅</button>
                    <button onClick={()=>deleteTodo(todo.id)}>❌</button>
                </div>
            ))}

        </div>
    )
}
