import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //it main reducer of app and it is combination of small reducers of each slice
    reducer: {
        cart: cartReducer,
        // user : userReducer,
    },
});

export default appStore;