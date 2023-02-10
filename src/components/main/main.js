export default function Main() {
    return (
        <main className="p-8 flex flex-col text-white min-h-screen rounded-xl bg-black">
            <h1 className="font-bold ">performance</h1>
            <div className="flex flex-row pt-20">
                <diV className='flex flex-col p-4'>
                    <p className="font-bold">76%</p>
                    <small className="text-gray-500">spendings</small>
                </diV>
                <div className="flex flex-col p-4">
                    <p className="font-bold">44%</p>
                    <small className="text-gray-500">income</small>
                </div>
            </div>

           <div className="flex flex-col py-10">
            <div className="flex py-5 ">
            <span className="bg-amber-500 rounded-xl px-3">?</span>
            <p>spendings course</p>
            <smal className='font-mono text-gray-400'>was taken</smal>
            </div>

            <div className="flex py-5 ">
            <span className="bg-blue-500 rounded-xl px-3">?</span>
            <p>Deposit programs</p>
            <small className="font-mono text-gray-400">was setup</small>
            </div>

            <div className="flex py-5">
            <span className="bg-red-500 rounded-xl px-3">?</span> 
            <p>Cashback program</p>
            <small className="font-mono text-gray-400">activated</small>
            </div>



           </div>
        </main>
    )
}







