import { configureStore } from "@reduxjs/toolkit";
import { expensesReducer, addExpense, changeSearchTerm, editExpense, setEditId, deleteExpense } from "./slices/expensesSlice";
import { loginReducer, setLogin, setOwner } from "./slices/loginSlice";
import { usersReducer, addUser } from "./slices/usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        login: loginReducer,
        expenses: expensesReducer
    }
})

export { store, addUser, addExpense, changeSearchTerm, editExpense, setEditId, setLogin, setOwner, deleteExpense }