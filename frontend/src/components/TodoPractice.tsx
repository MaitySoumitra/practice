import { useState } from "react"
interface todoType {
    id: number,
    text: string,
    completed: boolean
}
export const TodoPractice = () => {
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
        setTodos(
            todos.map(todo => (
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ))
        )
    }
    const deleteTodo = (id: any) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const filterTodos = todos.filter(todo => {
        if (filter === "Completed") return todo.completed
        if (filter === "Active") return !todo.completed
        return true
    })
    return (
        <div className="flex items-center mt-6 justify-center flex-col gap-6">
            <div className="space-x-2">
                <input className="p-2 border rounded-sm shadow" type="text" onChange={(e) => setInput(e.target.value)} />
                <button className="px-2 py-3 cursor-pointer" onClick={addTodo}>Add todo</button>
            </div>
            <select className="shadow-md rounded-md cursor-pointer border p-2" onChange={(e) => setFilter(e.target.value as "All" | "Active" | "Completed")}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
            <div className="space-y-2">
                {filterTodos.map(todo => (
                    <div className="space-y-2" key={todo.id}>
                        <div className="space-x-2">
                            <span
                                className={`cursor-pointer ${todo.completed ? "line-through" : ""}`}
                                onClick={() => toggleTodo(todo.id)}>{todo.text}
                            </span>
                            <button onClick={() => deleteTodo(todo.id)}>❌</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
