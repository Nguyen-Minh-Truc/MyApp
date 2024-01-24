import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name: 'admin',
    initialState: [{
       name: "MinhTruc",
       pass: "123",
       isAdmin: true
    }],
    reducers: {
        addAdmin:(state, action) => {
            const { name, pass, isAdmin } = action.payload;
            state.push({ name, pass, isAdmin });
        },
        deleteAdmin: (state, action) => {
            const AdminIdToDelete = action.payload;
            return state.filter((Admin, index) => index !== AdminIdToDelete);
          }
    }
})
export const { addAdmin , deleteAdmin } = adminSlice.actions;
export default adminSlice.reducer;