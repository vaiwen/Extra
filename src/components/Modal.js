import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, setLogin, setOwner } from '../store'

const Modal = ({ modal, setModal }) => {

    const users = useSelector((state) => state.users.data)

    const dispatch = useDispatch()
    const [visitor, setVisitor] = useState(true)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleModal = () => {
        setModal(!modal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (visitor) {
            dispatch(addUser({ username, email, password }))
            console.log('kayıt başarılı')
            handleVisitor()
            // setEmail('')
            // setPassword('')
        }
        else {
            let validation = 0
            users.map((user) => {
                if (email === user.email && password === user.password) {
                    validation++
                    let id = user.id
                    dispatch(setOwner({ id, username }))
                    dispatch(setLogin())
                }
                else {

                }
                validation > 0 ? setModal(!modal) : console.log('kullanıcı adı veya şifre hatalı')
            })
        }
    }

    const handleVisitor = () => {
        setVisitor(!visitor)
    }

    return (
        <div>
            <div className='absolute inset-0 bg-gray-200 opacity-80'></div>
            <div className='absolute inset-x-72 inset-y-20 p-4 bg-white flex flex-col justify-start items-center border border-black'>
                <button className='self-end hover:bg-black hover:text-white transition-all border border-black p-1' onClick={handleModal}><AiOutlineClose /></button>
                <div className='h-full flex flex-col justify-around w-[272px]'>
                    <h1 className='font-bold text-3xl self-center'>Expense Tracker</h1>
                    <span className='text-center'>{visitor ? 'Do you already have account? ' : 'Create an account '}<span onClick={handleVisitor} className='text-blue-700 font-bold hover:underline hover:cursor-pointer'>{visitor ? 'Sign In' : 'Sign Up'}</span></span>
                    <form className='flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <label className='text-sm'>Username</label>
                            <input onChange={handleUsername} value={username} type="text" className='border border-black outline-none p-2' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm'>Email</label>
                            <input onChange={handleEmail} value={email} type="text" className='border border-black outline-none p-2' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm'>Password</label>
                            <input onChange={handlePassword} value={password} type="password" className='border border-black outline-none p-2' />
                        </div>
                    </form>
                    <button onClick={handleSubmit} className='p-2 border border-black font-bold hover:outline hover:outline-1 transition-all'>{visitor ? 'Sign Up' : 'Sign In'}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal