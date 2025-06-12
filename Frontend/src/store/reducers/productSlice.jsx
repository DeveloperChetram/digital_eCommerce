import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    data:[]

}
const productSlice = createSlice({
    name:"product",
    initialState:initialState,
    reducers:{
        loadproduct: (state, action)=>{
            state.data = action.payload
        }
    }
})

export default productSlice.reducer;
export const {loadproduct} = productSlice.actions