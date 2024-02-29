import {createSlice}from "@reduxjs/toolkit";

const orderSlice=createSlice({
    name:"order",
    initialState:{
        orders: [],
    
        isFetching:false,
        error:false,
    },
    reducers:{
        //ADD ORDER DETAILS
        addOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addOrderSuccess: (state, action) => {
            
            state.isFetching = false;
            state.orders.push(action.payload);
        },
        addOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }


});


export const {addOrderFailure,addOrderStart,addOrderSuccess}=orderSlice.actions;
export default orderSlice.reducer;