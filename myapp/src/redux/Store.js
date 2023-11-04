import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './CartSlice'   

const store = configureStore(
    {
        reducer:{
            cartReducer: cartSlice
        }
    }
    )

 export default store