import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: false,
        owner: []
    },
    reducers: {
        setOwner(state, action) {
            state.owner.push({
                id: action.payload.id,
                username: action.payload.username,
            })
        },
        setLogin(state) {
            state.login = !state.login
        }
    }
})

export const { setLogin, setOwner } = loginSlice.actions
export const loginReducer = loginSlice.reducer