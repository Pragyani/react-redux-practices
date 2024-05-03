import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state,action){ 
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
        },
        deleteUsers(state,action){
            return []
        },
    },
})

export default UserSlice;
export const{addUser,removeUser,deleteUsers}=UserSlice.actions;