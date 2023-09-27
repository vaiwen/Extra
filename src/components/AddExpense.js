import React, { useState } from 'react'
import { addExpense } from '../store'
import { useDispatch, useSelector } from 'react-redux/es/exports'

const AddExpense = () => {

    const dispatch = useDispatch()
    const today = new Date()

    const owner = useSelector((state) => state.login.owner[0]?.id)

    const [describe, setDescribe] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('food')
    const [date, setDate] = useState(today.toLocaleDateString())

    const handleDescribe = (e) => {
        setDescribe(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handlePost = () => {
        dispatch(addExpense({ owner, describe, price, category, date }))
        console.log('expense added!')
        setDescribe('')
        setPrice(0)
        setCategory('food')
        setDate(today.toLocaleDateString())
    }

    return (
        <div className='w-1/3 h-full border border-black p-8 flex flex-col justify-between'>
            <input onChange={handleDescribe} value={describe} type="text" placeholder='Describe' className='outline-none border border-black px-2 py-1' />
            <input onChange={handlePrice} value={price} type="number" placeholder='Price' className='outline-none border border-black px-2 py-1' />
            <select onChange={handleCategory} value={category} className='outline-none border border-black px-2 py-1'>
                <option value="food">Food</option>
                <option value="education">Education</option>
                <option value="fashion">Fashion</option>
                <option value="other">Other</option>
            </select>
            <input onChange={handleDate} value={date} type="date" className='outline-none border border-black px-2 py-1' />
            <button onClick={handlePost} className='border border-black p-2 font-bold hover:outline hover:outline-1 transition-all'>Add Expense</button>
        </div>
    )
}

export default AddExpense