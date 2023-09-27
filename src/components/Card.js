import React from 'react'
import { BsWifi2 } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Card = () => {

    const owner = useSelector((state) => state.login.owner)
    const login = useSelector((state) => state.login.login)

    return (
        <div className='w-[calc(50%-50px)] h-full border border-black p-8'>
            <div className='w-full h-full bg-green-200 border-2 border-black flex flex-col bg-gradient-to-tr from-yellow-200 via-green-200'>
                <div className='w-full h-auto flex justify-between items-center p-2'>
                    <BsWifi2 className=' rotate-90' size={30} />
                    <p className=' text-sm font-semibold'>ExTra Card</p>
                </div>
                <div className='w-full h-2/3 flex flex-col justify-end p-2'>
                    <h1 className=' text-lg font-bold mb-1'>1415 7800 3264 4101</h1>
                    <div className='flex justify-between'>
                        <p className='text-sm font-semibold'>{login ? owner[0].username : 'Barış GÖLESALAN'}</p>
                        <p className='text-sm font-semibold'>11/25</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card