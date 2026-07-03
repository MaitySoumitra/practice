import { useEffect, useState } from "react"

export const ModalOpen = () => {
    const [modal, setModal] = useState(false)
  useEffect(()=>{
    if(!modal) return

    const handaleClick=(e:any)=>{
        if(e.key==="Escape"){
            setModal(false)
        }
    }
    document.addEventListener("keydown", handaleClick)
    
    return ()=>{
        document.removeEventListener("keydown", handaleClick)
    }
  })
    return (
        <div>
            <p className="text-xl">Modal Popup</p>
            <button onClick={() => setModal(true)} className="px-3 py-3 border rounded-lg shadow-lg">Modal popup</button>
            {modal && (
                <div onClick={() => setModal(false)} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div onClick={(e) => e.stopPropagation()} className="bg-white w-[320px] rounded-lg p-6 relative">
                        <button onClick={() => setModal(false)} className="absolute top-2 right-2 p-2 hover-gray-50">❌</button>
                        <h2 className="text-lg font-bold mb-2">Modal Title</h2>
                        <p className="text-gray-600">Tailwind Modal in a single file</p>
                    </div>
                </div>
            )}
        </div>
    )
}
