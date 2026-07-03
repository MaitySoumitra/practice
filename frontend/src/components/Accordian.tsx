import { useState } from "react"


export const Accordian = () => {

    const [openId, setOpenId] = useState(null)
    const data = [
        { id: 1, title: "what is React?", content: "React is UI library" },
        { id: 2, title: "What is State", content: "State manages data." },
        { id: 3, title: "What is props", content: "props is passes data" }
    ]
    const toggleTodo = (id: any) => {
        setOpenId(prev => prev === id ? null : id)
    }
    return (
        <div>
            {data.map((d) => (
                    <li key={d.id}>
                        <button onClick={() => toggleTodo(d.id)}>
                            {d.title}
                        </button>
                        {openId===d.id && (
                            <div>
                                {d.content}
                            </div>
                        )}
                    </li>
            ))}
        </div>
    )
}
