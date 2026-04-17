
import { Outlet, useSearchParams } from "react-router-dom"

export const Users = () => {
  const [searchParams, setSearchParams]=useSearchParams()
  const isSearchUser=searchParams.get('filter')==='active'
  return (
    <div><div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
    </div>
    <div className="flex gap-5 mb-7">
      <button className="border border-dashed rounded-lg p-2" onClick={()=>setSearchParams({filter: "active"})}>Active User</button>
      <button className="border border-dashed rounded-lg p-2" onClick={()=>setSearchParams({})}>Reset user</button>

      
    </div >
    {
        isSearchUser? (<div className="font-bold text-4xl text-green-400">Active User</div>):(<div className="font-bold text-3xl text-red-300">All User</div>)
      }

        <Outlet/>
    </div>
  )
}
