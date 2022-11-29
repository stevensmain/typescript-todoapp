import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Task } from '../../interfaces/type'

export interface TaskState {
    tasks: Task[],
    selectedTask: Task | null
}

const initialState: TaskState = {
    tasks: [],
    selectedTask: null
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks = [...state.tasks, action.payload]
        },
        editTask: (state, action: PayloadAction<Task>) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
        },
        markComplete: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.map(task => task.id === action.payload ? { ...task, complete: !task.complete } : task)
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        selectTask: (state, action: PayloadAction<Task>) => {
            state.selectedTask = action.payload
        }
    },
})

export const { addTask, editTask, selectTask, deleteTask, markComplete } = tasksSlice.actions

export const useSelector = (state: RootState) => state.tasks

export default tasksSlice.reducer