import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    id: number;
    username: string;
}

const initialState: UserState = {
    id: -1,
    username: 'New user'
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action);
            state.id = action.payload.id;
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.id = initialState.id;
            state.username = initialState.username;
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;