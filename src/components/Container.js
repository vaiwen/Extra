import React from 'react'
import AddExpense from './AddExpense'
import AllExpenses from './AllExpenses'
import Card from './Card'
import EditExpense from './EditExpense'
import Header from './Header'
import Navbar from './Navbar'
import ShowExpense from './ShowExpense'
import Tips from './Tips'

import { useState } from 'react'
import Modal from './Modal'

const Container = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className='w-1/2 h-2/3 bg-white flex border border-black relative'>
            <Navbar modal={modal} setModal={setModal} />
            <div className='w-full flex flex-col'>
                <Header />
                <div className='w-full h-3/5 flex'>
                    <AddExpense />
                    <div className='w-2/3 h-full flex flex-col'>
                        <div className='w-full h-[calc(80%)] flex'>
                            <ShowExpense />
                            <EditExpense />
                        </div>
                        <div className='w-full h-[calc(20%)] border border-black'>
                            <Tips />
                        </div>
                    </div>
                </div>
                <div className='w-full h-2/5 flex'>
                    <AllExpenses />
                    <Card />
                </div>
            </div>
            {modal && <Modal modal={modal} setModal={setModal} />}
        </div>

    )
}

export default Container