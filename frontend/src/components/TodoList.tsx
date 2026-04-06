import { useState } from "react"

interface todoType {
    id: number,
    text: string,
    completed: boolean
}

export const TodoList = () => {
    const [todos, setTodos] = useState<todoType[]>([])
    const [input, setInput] = useState("")
    const [filter, setFilter] = useState<"All" | "Active" | "Completed">("All")

    const addTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: input.trim(),
            completed: false
        }
        setTodos([...todos, newTodo])
        setInput("")
    }
    const toggleTodo = (id: number) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )))
    }
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const filterTodos = todos.filter(todo => {
        if (filter === "Active") return !todo.completed
        if (filter === "Completed") return todo.completed
        return true
    })
    return (
        <div className="mt-4 flex max-w-4xl mx-auto items-center justify-center">
            <div className="flex-row space-x-4">
                <input className="p-2 border rounded" type="text" value={input} onChange={(e: any) => setInput(e.target.value)} />
                <button onClick={addTodo} className="rounded cursor-pointer border px-4 py-2">AddTodo</button>

                <select className="border p-2 rounded" onChange={(e: any) => setFilter(e.target.value as "All" | "Active" | "Completed")}>
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                </select>
                <ul className="space-y-6">
                    {filterTodos.map((todo)=>(
                        <div key={todo.id}>
                            <span onClick={()=>toggleTodo(todo.id)} className={`cursor-pointer ${todo.completed ? "line-through text-red": ""}`}>{todo.text}</span>
                            <button onClick={()=>deleteTodo(todo.id)}>❌</button>
                        </div>
                    ))}
                </ul>
            </div>

        </div>
    )
}
