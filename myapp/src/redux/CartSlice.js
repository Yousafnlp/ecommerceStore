import { createSlice } from "@reduxjs/toolkit";



export const initialState = {
    cart: [],
    price: 0.0,
};





const cartSlice = createSlice(
    {
        name: 'shoppingCart',
        initialState,
        reducers: {



            addToCart: (state, action) => {

                let itemIndex = state.cart.findIndex(item => item.id === action.payload.id)

                if (itemIndex >= 0) {
                    state.price -= state.cart[itemIndex].price

                    state.cart[itemIndex].quantity += 1
                    state.cart[itemIndex].price = state.cart[itemIndex].quantity * action.payload.price;

                    // state.price -= tempPrice
                    state.price += state.cart[itemIndex].price


                } else if (itemIndex < 0) {
                    const temp = { ...action.payload, quantity: 1 }
                    state.cart = [...state.cart, temp]

                    state.price += temp.price
                //     for (let i = 0; i < state.cart.length; i++) {
                //     state.price += state.cart[i].price;
                // }
                
            }


        },

        removeFromCart: (state, action) => {


            const Item_Index = state.cart.findIndex(item => item.id === action.payload.id)

            if (Item_Index >= 0) {
                state.price -= state.cart[Item_Index].price

                const data = state.cart.filter(item => item.id !== action.payload.id)
                state.cart = data
            }

            else if (Item_Index < 0) {
                state.cart = [...state.cart]
            }
        },

        emptyCart: (state, action) => {

            state.cart = []
        },

        addToCart_Detailed: (state, action) => {

            let itemIndex_count = state.cart.findIndex(item => item.id === action.payload.data.id)

            if (itemIndex_count >= 0) {
                state.price -= state.cart[itemIndex_count].price

                state.cart[itemIndex_count].quantity = action.payload.count
                state.cart[itemIndex_count].price = action.payload.count * action.payload.data.price

                state.price += state.cart[itemIndex_count].price


            } else if (itemIndex_count < 0) {
                const temp = { ...action.payload.data, quantity: action.payload.count, price: action.payload.data.price * action.payload.count }
                state.cart = [...state.cart, temp]

                state.price += temp.price
                console.log(temp)
            }
        }

    },


        },


)



export const { addToCart, addToCart_Detailed, emptyCart, removeFromCart, totalPrice } = cartSlice.actions
export default cartSlice.reducer