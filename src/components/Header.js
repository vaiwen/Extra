import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { changeSearchTerm } from '../store'


const Header = () => {

    const users = useSelector((state) => state.users.data)
    const owner = useSelector((state) => state.login.owner)
    const login = useSelector((state) => state.login.login)

    const user = users.filter((user) => {
        return user.id === owner[0]?.id
    })

    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.expenses.searchTerm)
    // const expenses = useSelector((state) => state.expenses.list)

    const handleChange = (e) => {
        dispatch(changeSearchTerm(e.target.value))
    }

    return (
        <div className='w-full h-20 bg-blue-200 border border-black flex justify-between items-center p-4'>
            <h1 className='text-2xl'>{users.length > 0 && login === true ? `WELCOME, ${user[0].username}` : 'WELCOME, ...'}</h1>
            <div className='flex justify-evenly items-center'>
                <input onChange={handleChange} value={searchTerm} type="text" placeholder='Search Expense' className='h-1/4 w-48 outline-none border border-black mr-10 px-2 py-1' />
                <div className='w-12 h-12 rounded-full border border-black bg-white image'></div>
                {/* <img src={user.pp} className='w-12 h-12 rounded-full border border-black bg-white image'></img> */}
            </div>
        </div>
    )
}

export default Header