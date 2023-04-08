import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../server";


export const getUserFetch = createAsyncThunk('getuser/getuser' , async () => {
    const res = await axios.get(`${server}/getuser` , { withCredentials : true} )
    console.log(res.data)
    return res.data ;
})


export const getUserSlice = createSlice({
    name : 'getuser' ,
    initialState : {
        loading : true ,
        user : '',
        success : true ,
        error : null
    },
    
    extraReducers : (builder) => {
        builder.addCase(getUserFetch.pending , (state) => {
            state.loading = true 
            state.user = ''
            state.success = false
        })
        builder.addCase(getUserFetch.fulfilled , (state , action) => {
            state.loading = false 
            state.error = null
            state.user = action.payload
            state.success = true
        })
        builder.addCase(getUserFetch.rejected , (state , action) => {
            state.loading = false 
            state.user = ''
            state.error = action.payload.error
            state.success = false
        })
    }
    
})

export default getUserSlice.reducer ;