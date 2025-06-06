import {createSlice} from "@reduxjs/toolkit"
const initialState = {

}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        loadcart: (state, action)=>{
            state.data = action.payload
        }
    }
})

export default cartSlice.reducer;
export const {loadcart} = cartSlice.actions