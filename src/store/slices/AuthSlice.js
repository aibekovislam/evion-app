import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        error: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearAuth: (state) => {
            state.user = null;
            state.access_token = null;
            state.refresh_token = null;
        }
    }
});

export const { setUser, setError, clearAuth } = authSlice.actions;
export default authSlice.reducer;
