import React from 'react'
import { BiRefresh } from 'react-icons/bi'
import { useSelector } from 'react-redux/es/exports'

const Tips = () => {

    const expenses = useSelector(({ expenses: { list }, login: { owner } }) => {
        const filteredExpenses = list.filter((expense) => {
            return expense.owner === owner
        })
        return filteredExpenses
    })

    return (
        <div className='w-full h-full px-4 py-2 flex items-center'>
            <BiRefresh size={30} className='hover:cursor-pointer transition-all hover:scale-125 hover:rotate-180' />
            <p className='ml-2'>Lorem ipsum dolor sit amet, constectur</p>
        </div>
    )
}

export default Tips