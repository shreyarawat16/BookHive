import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState= {
   cartItems: [],
}
const cartSlice= createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existingItem= state.cartItems.find(item => item.id === action.payload.id)
            if(!existingItem){
                state.cartItems.push(action.payload);
                toast.success(` item added to cart successfully`)
            }
            else{
                
                toast.error("Item already added");
            }
        },

        removeFromCart: (state, action)=>{

        }
    }

})
export const { addToCart, removeFromCart}= cartSlice.actions;
export default cartSlice.reducer;