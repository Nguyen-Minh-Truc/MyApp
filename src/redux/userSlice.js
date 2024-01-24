import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      const { address, id, name, pass, phone } = action.payload;
      const newUser = { name, pass, phone, address,id };
      state.push(newUser);
    },
    deleteUser: (state, action) => {
      const userIdToDelete = action.payload;
      return state.filter((user, index) => index !== userIdToDelete);
    },
  },
});

export const { addUser , deleteUser } = userSlice.actions;
export default userSlice.reducer;


