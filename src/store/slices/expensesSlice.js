import { createSlice, nanoid } from "@reduxjs/toolkit"

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        editId: '',
        searchTerm: '',
        list: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },

        addExpense(state, action) {
            state.list.push({
                id: nanoid(),
                owner: action.payload.owner,
                describe: action.payload.describe,
                price: action.payload.price,
                category: action.payload.category,
                date: action.payload.date
            })
        },
        setEditId(state, action) {
            state.editId = action.payload
        },

        editExpense(state, action) {
            state.list.map((expense) => {
                if (expense.id === state.editId) {
                    expense.describe = action.payload.describe
                    expense.price = action.payload.price
                    expense.category = action.payload.category
                    expense.date = action.payload.date
                    state.editId = ''
                }
            })
        },

        deleteExpense(state, action) {
            const filteredExpenses = state.list.filter((expense) => {
                return expense.id !== action.payload
            })

            state.list = filteredExpenses
        }
    }
})

export const { addExpense, changeSearchTerm, editExpense, setEditId, deleteExpense } = expensesSlice.actions
export const expensesReducer = expensesSlice.reducer