import { configureStore } from '@reduxjs/toolkit'
import {
    useSelector,
    TypedUseSelectorHook,
} from "react-redux";
import tasksSlice from '../slices/tasksSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector