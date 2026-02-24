import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='w-full flex justify-between items-center font-semibold'>
                <div className='flex items-center gap-2'>
                    <ArrowLeft onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-[#121212] transition-colors' />
                    <ArrowRight onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer hover:bg-[#121212] transition-colors' />
                </div>
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black text-[15px] px-4 py-1.5 rounded-full hidden md:block cursor-pointer hover:scale-105 transition-transform font-bold'>Explore Premium</p>
                    <p className='bg-black py-1.5 px-3 rounded-full text-[15px] cursor-pointer hover:scale-105 transition-transform border border-gray-600 font-bold'>Install App</p>
                    <p className='bg-purple-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform'>N</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-gray-200 transition-colors'>All</p>
                <p className='bg-[#242424] px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#2a2a2a] transition-colors'>Music</p>
                <p className='bg-[#242424] px-4 py-1 rounded-2xl cursor-pointer hover:bg-[#2a2a2a] transition-colors'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar
