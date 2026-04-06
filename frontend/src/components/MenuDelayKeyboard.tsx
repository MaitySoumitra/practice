import { useEffect, useRef, useState } from "react"


export const MenuDelayKeyboard = () => {
    const [openMenu, setOpenMenu]=useState(false)
    const [activeIndex, setActiveIndex]=useState<number>(-1)
    const [selected, setSelected]=useState("Menu")
    const timeOutRef=useRef<number | null>(null)
    const menuRef=useRef<HTMLDivElement | null>(null)

    const handaleOpen=()=>{
        if(timeOutRef.current !== null){
 clearTimeout(timeOutRef.current);
        setOpenMenu(true)
        }

    }
    const handaleClose=()=>{
        timeOutRef.current=setTimeout(()=>{
            setOpenMenu(false)
        }, 300)
    }
    useEffect(()=>{
        const timeClose=(e:KeyboardEvent)=>{
            if(e.key==="Escape") setOpenMenu(false)
            if(e.key==="ArrowDown"){
                setOpenMenu(true)
                menuRef.current?.querySelector("a")?.focus()
            }
        }
        document.addEventListener("keydown", timeClose)
        return ()=> document.removeEventListener("keydown", timeClose)
    }, [])
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100">
        <div onMouseEnter={handaleOpen}
        onMouseLeave={handaleClose}
        className="relative"
        >
            <button className="px-2 py-3 bg-blue-600 text-white rounded">
                Menu
            </button>
            {openMenu &&(
                <div 
                ref={menuRef}
                className="absolute mt-2 w-40 rounded shadow-lg bg-white border">
                    <a 
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100">
                        Profile
                    </a>
                    <a 
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100">
                       Content
                    </a>
                    <a 
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100">
                        Overview
                    </a>
                </div>
            )}
        </div>
    </div>
  )
}
