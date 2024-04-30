import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";


const store= configureStore({
    reducer:{
    users: UserSlice.reducer
    },
})

export default store