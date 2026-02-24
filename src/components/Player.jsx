import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Mic2, ListMusic, Speaker, Volume2, Maximize2 } from 'lucide-react'

const Player = () => {
    const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong, volume, changeVolume } = useContext(PlayerContext);

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 ml-0'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12 h-12 rounded' src={track.image} alt="" />
                <div>
                    <p className='font-bold text-sm truncate w-24 md:w-32 lg:w-40'>{track.name}</p>
                    <p className='text-xs text-gray-400'>{track.desc.slice(0, 30)}...</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <Shuffle className='w-4 cursor-pointer opacity-70 hover:opacity-100' />
                    <SkipBack onClick={previous} className='w-4 cursor-pointer opacity-70 hover:opacity-100' />
                    {playStatus
                        ? <Pause onClick={pause} className='w-6 cursor-pointer opacity-70 hover:opacity-100 bg-white text-black rounded-full p-1' />
                        : <Play onClick={play} className='w-6 cursor-pointer opacity-70 hover:opacity-100 bg-white text-black rounded-full p-1' />
                    }
                    <SkipForward onClick={next} className='w-4 cursor-pointer opacity-70 hover:opacity-100' />
                    <Repeat className='w-4 cursor-pointer opacity-70 hover:opacity-100' />
                </div>
                <div className='flex items-center gap-5 w-full'>
                    <p className='text-xs text-gray-400'>{time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-600 rounded-full cursor-pointer h-1 relative group'>
                        <div ref={seekBar} className='h-1 border-none w-0 bg-white group-hover:bg-green-500 rounded-full transition-all' />
                    </div>
                    <p className='text-xs text-gray-400'>{time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-3 opacity-75'>
                <Mic2 className='w-4 cursor-pointer hover:opacity-100' />
                <ListMusic className='w-4 cursor-pointer hover:opacity-100' />
                <Speaker className='w-4 cursor-pointer hover:opacity-100' />
                <Volume2 className='w-4 cursor-pointer hover:opacity-100' />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={changeVolume}
                    className='w-20 accent-green-500 cursor-pointer h-1'
                />
                <Maximize2 className='w-4 cursor-pointer hover:opacity-100' />
            </div>
        </div>
    )
}

export default Player
