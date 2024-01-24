import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import  adminReducer  from "./Admin";
import managerReducer from "./Manager"
export default configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        manager: managerReducer
    }
})