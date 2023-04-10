import {
    configureStore,
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit"
import { Todo } from "./types"

const initialState: Todo[] = [];

const todoList = createSlice({
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

const store = configureStore({ reducer: todoList.reducer });
export const { add, remove } = todoList.actions;
export type todoListState = ReturnType<typeof store.getState>;
export default store