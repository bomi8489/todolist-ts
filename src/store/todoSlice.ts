import {
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit"
import { Todo } from "../types"

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: 'toDosReducer',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.push({ listvalue: action.payload, id: Date.now() })
        },
        remove: (state, action: PayloadAction<number>) => {
            return state.filter(toDo => toDo.id !== action.payload)
        }
    }
})

export const { add, remove } = todoSlice.actions;
export default todoSlice;