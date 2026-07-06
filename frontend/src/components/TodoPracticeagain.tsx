import { useState } from "react"

interface todoType {
    id: number,
    text: string,
    completed: boolean
}

export const TodoPracticeagain = () => {
    const [todos, setTodos] = useState<todoType[]>([])
    const [input, setInput] = useState('')
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
    const toggleTodo = (id: any) => {
        setTodos(todos.map((todo) => (
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )))
    }
    const deleteTodo = (id: any) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const filterTodos = todos.filter((todo) => {
        if (filter === "Active") return todo.completed
        if (filter === "Completed") return !todo.completed
        return true
    })
    return (
         <div className="w-full">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center space-y-6 px-4 py-6">
            <div className="space-x-3">
                <input className="p-2 border shadow-md rounded-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTodo}>Add todo</button>
            </div>
            <select className="p-1 border rounded-lg" onChange={(e) => setFilter(e.target.value as "All" | "Active" | "Completed")}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed"> Completed </option>
            </select>
            <div>
                {filterTodos.map((todo) => (
                    <div key={todo.id}>
                        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={()=>deleteTodo(todo.id)}>❌</button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}
