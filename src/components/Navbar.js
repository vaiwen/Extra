import { useDispatch, useSelector } from "react-redux/es/exports"
import { setLogin, setOwner } from "../store"

const Navbar = ({ modal, setModal }) => {

    const dispatch = useDispatch()
    const login = useSelector((state) => state.login.login)

    const handleModal = () => {
        if (login) {
            dispatch(setLogin())
            dispatch(setOwner(''))
        }
        setModal(!modal)
    }

    return (
        <div className='w-1/5 h-full bg-gray-400 border border-black flex flex-col justify-between'>
            <div className='w-full h-20 flex justify-center items-center border-b-2 border-black'>
                <h1 className='text-white text-4xl text-center'>ExTra</h1>
            </div>
            <div className="flex flex-col p-4 justify-start w-full">
                <p className='w-full p-1 text-white text-lg font-bold border-b border-white mb-4 hover:cursor-pointer hover:bg-gray-500 transition-all'>Theme</p>
                <p className='w-full p-1 text-white text-lg font-bold border-b border-white mb-4 hover:cursor-pointer hover:bg-gray-500 transition-all'>Help</p>
                <p className='w-full p-1 text-white text-lg font-bold border-b border-white mb-4 hover:cursor-pointer hover:bg-gray-500 transition-all' onClick={handleModal}>{login ? 'Logout' : 'Login'}</p>
            </div>
        </div>
    )
}

export default Navbar