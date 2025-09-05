import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        isLoggedIn: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        removeUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    }
})

export const {setUser, removeUser} = authSlice.actions;
export default authSlice.reducer;

