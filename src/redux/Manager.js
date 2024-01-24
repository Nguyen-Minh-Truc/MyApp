// managerSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const managerSlice = createSlice({
  name: 'manager',
  initialState: {
    user: true,
    product: false,
    order: false,
    isLoading: false, 
  },
  reducers: {
    update: (state, action) => {
      const { user, product, order, revenue } = action.payload;
      return {
        ...state,
        user: user !== undefined ? user : state.user,
        product: product !== undefined ? product : state.product,
        order: order !== undefined ? order : state.order,
        revenue: revenue !== undefined ? revenue : state.revenue,
        isLoading: false, 
      };
    },
    startLoading: (state) => {
      return {
        ...state,
        isLoading: true, 
      };
    },
  },
});

export const { update, startLoading } = managerSlice.actions;
export default managerSlice.reducer;
