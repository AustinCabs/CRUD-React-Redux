import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './components/userSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})