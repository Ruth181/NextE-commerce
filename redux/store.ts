import { configureStore } from "@reduxjs/toolkit";
import reduxCartItemsReducer from './slice';

const store = configureStore({
    reducer: {
        store : reduxCartItemsReducer
    }
});

export default store;