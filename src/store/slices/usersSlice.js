import { createSlice, nanoid } from "@reduxjs/toolkit"
import axios from "axios"

// const accessKey = 'MmQEALCAZ3ODG2mEDHRpyxQXJG3LfhYP-5-3roEzn_o'

// const getImageRequest = async () => {
//     const response = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${accessKey}`)
//     return response.data.urls.regular
// }

// let pp = ''

// axios.get(`https://api.unsplash.com/photos/random/?client_id=${accessKey}`).then((response) => {
//     pp = response.data.urls.regular
// })


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: []
    },
    reducers: {
        addUser(state, action) {
            state.data.push({
                id: nanoid(),
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            })
        }
    }
})

export const { addUser } = usersSlice.actions
export const usersReducer = usersSlice.reducer