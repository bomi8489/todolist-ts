import {
    configureStore,
    createSlice,
    PayloadAction
} from "@reduxjs/toolkit"


const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.push({ text: action.payload, id: Date.now() })
        },
        remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
})

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.action;

export default store;