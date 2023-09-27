import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editExpense } from '../store'

const EditExpense = () => {

    let id = useSelector((state) => state.expenses.editId)
    const expenses = useSelector((state) => state.expenses.list)
    const filteredExpense = expenses.filter((expense) => expense.id === id)

    const [clear, setClear] = useState(false)
    const [updDescribe, setUpdDescribe] = useState('')
    const [updPrice, setUpdPrice] = useState('')
    const [updCategory, setUpdCategory] = useState('')
    const [updDate, setUpdDate] = useState('')

    useEffect(() => {
        setUpdDescribe(filteredExpense[0]?.describe)
        setUpdPrice(filteredExpense[0]?.price)
        setUpdCategory(filteredExpense[0]?.category)
        setUpdDate(filteredExpense[0]?.date)
        setClear(false)
    }, [id])

    const dispatch = useDispatch()

    const attribues = ['food', 'education', 'fashion', 'other']

    const handleChangeDescribe = (e) => {
        setUpdDescribe(e.target.value)
    }

    const handleChangePrice = (e) => {
        setUpdPrice(e.target.value)
    }

    const handleChangeCategory = (e) => {
        setUpdCategory(e.target.value)
    }

    const handleChangeDate = (e) => {
        setUpdDate(e.target.value)
    }

    const handleEdit = () => {
        dispatch(editExpense({ describe: updDescribe, price: updPrice, category: updCategory, date: updDate }))
        setUpdDescribe('')
        setUpdPrice('')
        setUpdCategory('')
        setUpdDate('')
        setClear(true)
    }

    return (
        <div className='w-1/3 h-full border border-black flex flex-col px-4 py-2 justify-around'>
            <form className='w-full h-4/6 border border-black border-b-0'>
                <input onChange={handleChangeDescribe} value={updDescribe} className='w-full h-1/4 border-b border-black p-1 px-2 flex items-center justify-center outline-none bg-gray-200' type="text" placeholder={clear ? '' : filteredExpense[0]?.describe} />
                <input onChange={handleChangePrice} value={updPrice} className='w-full h-1/4 border-b border-black p-1 px-2 flex items-center justify-center outline-none bg-gray-200' type="number" placeholder={clear ? '' : filteredExpense[0]?.price} />
                <select onChange={handleChangeCategory} value={updCategory} className='w-full h-1/4 border-b border-black p-1 px-1 flex items-center justify-center outline-none bg-gray-200'>
                    {
                        filteredExpense[0] ? Object.keys(filteredExpense[0]).map((item, i) => {
                            if (i > 1) {
                                return (
                                    <option selected={attribues[i - 2] === filteredExpense[0].category} key={i} value={attribues[i - 2]}>{attribues[i - 2]}</option>
                                )
                            }
                        }) : ''
                    }
                </select>
                <input onChange={handleChangeDate} className='w-full h-1/4 border-b border-black p-1 px-2 flex items-center justify-center outline-none bg-gray-200' type="date" value={updDate === '' ? filteredExpense[0]?.date : updDate} />
            </form>
            <button onClick={handleEdit} className='border border-black p-2 font-bold hover:outline hover:outline-1 transition-all'>Edit & Save</button>
        </div>
    )
}

export default EditExpense