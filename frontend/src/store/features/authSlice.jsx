import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        isLoggedIn: false,
        isLoading: true
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        removeUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        }
    }
})

export const {setUser, removeUser} = authSlice.actions;
export default authSlice.reducer;

