import { useSearchParams } from 'react-router-dom'
const TabItems = [
    { key: "Profile", content: "This is Profile Content" },
    { key: "Overview", content: "This is Overview Content" },
    { key: "Performance", content: "This is performance content" }
]

export const TabQueryParams = () => {
    const [searchParams, setSearchparams] = useSearchParams()
    const activeTab = searchParams.get('tabs')

    const handaletabChange = (tabKey: any) => {
        setSearchparams({ tabs: tabKey })
    }
    return (
        <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
            <div className='flex border-b'>
                {TabItems.map(tab => (
                    <div
                    key={tab.key}
                        className={`px-4 py-2 -mb-px border-b-2 font-medium transition-all
                ${
                  activeTab === tab.key
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-blue-500"
                }`}
                        onClick={() => handaletabChange(tab.key)}
                    >
                        {tab.key}
                    </div>
                ))}
            </div>
            <div className='mt-4'>
                {
                    activeTab==="Profile" &&(
                        <div >
                            <h2 className='text-xl font-bold'>Profile</h2>
                           <p className='text-base font-semibold'>This is Profile content</p>
                            </div>
                    )
                }
                {
                    activeTab==="Overview" &&(
                        <div >
                            <h2 className='text-xl font-bold'>OverView</h2>
                           <p className='text-base font-semibold'>This is OverView content</p>
                            </div>
                    )
                }
                {
                    activeTab==="Performance" &&(
                        <div >
                            <h2 className='text-xl font-bold'>Performance</h2>
                           <p className='text-base font-semibold'>This is Performance content</p>
                            </div>
                    )
                }

            </div>
            </div>
        </div>
    )
}
