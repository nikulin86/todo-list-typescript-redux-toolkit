import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/todoSlice'

const rootReducer = combineReducers({
    todosApp: todoReducer,
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];