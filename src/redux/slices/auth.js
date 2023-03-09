import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};
 export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setLogout:(state)=>{
            state.user=null;
            state.token=null
        }
    }
})
export const {setLogout}=authSlice.actions
export default authSlice.reducer