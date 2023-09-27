import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { deleteExpense, setEditId } from '../store/slices/expensesSlice'

const ShowExpense = () => {

    const dispatch = useDispatch()
    const [attribute, setAttribute] = useState('')

    const searchTerm = useSelector((state) => state.expenses.searchTerm)
    const owner = useSelector((state) => state.login.owner)
    const list = useSelector((state) => state.expenses.list)

    const filteredExpenses = list.filter((expense) => expense.owner === owner[0].id)

    const boxes = useRef([])

    const buttons = [
        <button className='w-full h-10 border-r border-b border-black'>Describe</button>,
        <button className='w-full h-10 border-r border-l border-b border-black'>Price</button>,
        <button className='w-full h-10 border-r border-l border-b border-black'>Category</button>,
        <button className='w-full h-10 border-b border-l border-black'>Date</button>
    ]

    const addToRefs = (e) => {
        if (e && !boxes.current.includes(e)) {
            boxes.current.push(e)
        }
    }

    const handleButton = (i) => {
        boxes.current.map((box) => {
            box.style.backgroundColor = 'white'
            box.style.color = 'black'
        })
        boxes.current[i].style.backgroundColor = 'black'
        boxes.current[i].style.color = 'white'
        setAttribute(boxes.current[i].innerText)
    }

    const handleExpense = (id) => {
        dispatch(setEditId(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteExpense(id))
    }

    return (
        <div className='w-2/3 h-full border border-black flex flex-col'>
            <div className='w-full flex'>
                {buttons.map((button, i) => (
                    <div ref={addToRefs} key={i} className='w-full transition-all hover:bg-slate-200' onClick={() => handleButton(i)}>{button}</div>
                ))}
            </div>
            <div className='w-full h-full border-t border-b border-black p-4 overflow-x-scroll flex justify-start'>
                {
                    filteredExpenses.map((expense) => {
                        if (attribute && expense[`${attribute.toLocaleLowerCase()}`].includes(searchTerm)) {
                            return (
                                <div onClick={() => handleExpense(expense.id)} key={expense.id} className='flex flex-col justify-between items-center w-1/3 min-w-fit h-full border border-black ml-1'>
                                    <p className='h-4/5 flex items-center justify-center text-center border-b border-black w-full hover:bg-black hover:text-white transition-all hover:cursor-pointer'>{expense[`${attribute.toLocaleLowerCase()}`]}</p>
                                    <div onClick={() => handleDelete(expense.id)} className='w-full h-1/5 text-center hover:font-semibold hover:cursor-pointer transition-all'>Delete</div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className='w-full h-14 flex justify-center items-center border-t border-black'>
                <div className='w-3 h-3 ml-1 rounded-full border border-black'></div>
                <div className='w-3 h-3 ml-1 rounded-full border border-black'></div>
                <div className='w-3 h-3 ml-1 rounded-full border border-black'></div>
            </div>
        </div>
    )
}

export default ShowExpense