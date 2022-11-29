import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import tasksSlice from '../slices/tasksSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['taskReducer']
}

const rootReducer = combineReducers({
    taskReducer: tasksSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector