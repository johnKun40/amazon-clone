import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// const intialState = {
    
// };

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    },
    reducers:{

        addToCart(state, action){

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if(itemIndex >= 0){

                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("increased product quantity", {position: "bottom-right"});
                
                
            } else {

                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success('added item to cart', {position: "bottom-right"});
                
            }

            
            
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;