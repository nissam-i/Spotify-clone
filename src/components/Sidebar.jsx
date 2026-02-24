import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, Search, Library, Plus, ArrowRight } from 'lucide-react'

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded-lg flex flex-col justify-around transition-all'>
                <div onClick={() => navigate('/')} className='flex items-center gap-4 pl-8 cursor-pointer hover:text-white text-gray-400 transition-all'>
                    <Home className='w-6' />
                    <p className='font-bold'>Home</p>
                </div>
                <div onClick={() => navigate('/search')} className='flex items-center gap-4 pl-8 cursor-pointer hover:text-white text-gray-400 transition-all'>
                    <Search className='w-6' />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className='bg-[#121212] h-[85%] rounded-lg overflow-hidden'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3 text-gray-400 hover:text-white cursor-pointer transition-all'>
                        <Library className='w-6' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Plus className='w-5 cursor-pointer hover:bg-[#242424] rounded-full p-1 text-gray-400 hover:text-white' />
                        <ArrowRight className='w-5 cursor-pointer hover:bg-[#242424] rounded-full p-1 text-gray-400 hover:text-white' />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-[#2a2a2a] transition-colors'>
                    <h1 className='text-[16px]'>Create your first playlist</h1>
                    <p className='font-medium text-sm text-gray-300'>It's easy, we'll help you</p>
                    <button className='px-4 py-1.5 bg-white text-[14px] text-black font-bold rounded-full mt-4 hover:scale-105 active:scale-95 transition-transform'>Create playlist</button>
                </div>
                <div className='p-4 bg-[#242424] m-2 rounded-lg font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 hover:bg-[#2a2a2a] transition-colors'>
                    <h1 className='text-[16px]'>Let's find some podcasts to follow</h1>
                    <p className='font-medium text-sm text-gray-300'>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[14px] text-black font-bold rounded-full mt-4 hover:scale-105 active:scale-95 transition-transform'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
