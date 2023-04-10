import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const reducers = combineReducers({
    todoReducer: todoSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todoReducer']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }),
});

export type todoListState = ReturnType<typeof store.getState>;
export default store;