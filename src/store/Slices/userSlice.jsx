import { createSlice } from "@reduxjs/toolkit";

const UserSlice= createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser(state,action){ },
        removeUser(state,action){},
        deleteUsers(state,action){},
    },
})

export default UserSlice;