import img1 from './img1.png'
import { HomeFilled, FolderFilled, SettingFilled } from "@ant-design/icons"


export default function Sidbar() {
    return (
        <side className="flex flex-col items-center justify-center">
            <h1 className='font-bold mx-3 my-5'>boosto</h1>
            <div className='my-10 mx-3 flex items-center flex-col'>
            <img className='rounded-md w-14 ' src={img1}></img>
            <p className='font-bold'>jonathan Roy</p>
            <small className='text-gray-400'>ceo</small>
            </div>

            <div className='flex flex-col font-bold links'>
                 <div className='flex flex-row p-2 hover:text-gray-400'>
                    <a href='#'><HomeFilled /></a>
                    <p>Dashbord</p>
                </div>
                <div className='flex flex-row p-2'>
                    <a href='#'><FolderFilled /></a>
                    <p>Customers</p>
                </div>
                <div className='flex flex-row p-2'>
                    <a href='#'><SettingFilled /></a>
                    <p>Solution</p>
                </div>
                <div className='flex flex-row p-2'>
                    <a href='#'><SettingFilled /></a>
                    <p>setting</p>
                </div>
            </div>
            <p className='text-gray-400 mt-20'>[^Exit</p>
        </side>
    )
}