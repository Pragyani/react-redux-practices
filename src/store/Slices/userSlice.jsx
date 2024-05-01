import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state,action){ 
            state.push(action.payload)
        },
        removeUser(state,action){},
        deleteUsers(state,action){},
    },
})

export default UserSlice;
export const{addUser}=UserSlice.actions;