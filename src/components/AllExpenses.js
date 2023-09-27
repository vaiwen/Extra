import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';
import { useSelector } from 'react-redux/es/exports';

const AllExpenses = () => {

    const [food, setFood] = useState(0)
    const [education, setEducation] = useState(0)
    const [fashion, setFashion] = useState(0)
    const [other, setOther] = useState(0)

    const owner = useSelector((state) => state.login.owner[0]?.id)
    const expenses = useSelector((state) => state.expenses.list)
    const filteredExpense = expenses.filter((expense) => expense.owner === owner)

    let xFood = 0
    let xEducaiton = 0
    let xFashion = 0
    let xOther = 0

    const values = filteredExpense.map((expense) => {
        return expense.category
    })

    values.map((value) => {
        switch (value) {
            case 'food':
                xFood++
                break;
            case 'education':
                xEducaiton++
                break;
            case 'fashion':
                xFashion++
                break;
            case 'other':
                xOther++
                break;
            default:
                break;
        }
    })

    useEffect(() => {
        setFood(prev => prev + xFood)
    }, [xFood])

    useEffect(() => {
        setEducation(prev => prev + xEducaiton)
    }, [xEducaiton])

    useEffect(() => {
        setFashion(prev => prev + xFashion)
    }, [xFashion])

    useEffect(() => {
        setOther(prev => prev + xOther)
    }, [xOther])

    const data = [
        { name: 'Food', value: food },
        { name: 'Education', value: education },
        { name: 'Fashion', value: fashion },
        { name: 'Other', value: other },
    ]

    return (
        <div className='w-[calc(50%+50px)] h-full border border-black flex justify-center items-center'>
            <h1 className='self-start p-1 mt-2 text-lg bg-[#023047] text-white'>Graphics by Category</h1>
            <PieChart width={250} height={200}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="#023047"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default AllExpenses