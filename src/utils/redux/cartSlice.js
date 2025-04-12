import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        //addItem is action and it calls ()=>{} this reducer fn
        addItem: (state, action) => {
            // state in parameter is intialState
            //reducer fn
            state.items.push(action.payload)
            //useDispatch returns a object in which obj.payload is our req data
        },
        removeItem: (state, action) => {
            //mutaing the state
            // state.items = state.items.filter((i) => i?.card?.info?.id !== action.payload.card?.info?.id); //this works directly mutating
            const newItems = state.items.filter((i, index) => i?.card?.info?.id !== action.payload.card?.info?.id); //does not works
            const newState = state;
            newState.items = newItems;
            return newState //returning new state


            // return { items: newItems };//this also works
        },

        clearCart: (state) => {
            //making length of cart is zero to make it empty
            //state = [] //it will not work
            //as it not modifiying the original state.
            //            state.items.length = 0;
            //redux toolkit says either we have to mutate the state or return the new state
            //we can
            return { items: [] };
        },
    }
})
// createslice() returns object and it has actions reducer in it
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;