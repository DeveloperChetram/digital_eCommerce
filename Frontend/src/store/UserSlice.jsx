import { createSlice } from "@reduxjs/toolkit";

const intiaState ={
    data:[]
}

const userSlice = createSlice({
    name:"user",
    initialState:intiaState,
    reducers:{
        loaduser: (state, action)=>{
            state.data = action.payload;
            // console.log("action", action);

        },
    }

})
export const {loaduser}=userSlice.actions;
export default userSlice.reducer;