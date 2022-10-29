import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type categoryType = "Utility" | "Food" | "Education" | "Select Category";
export interface Bill {
  id: string;
  description: string;
  category: categoryType;
  amount: number;
  date: number | undefined;
}
export interface BillState {
  bills: Bill[];
}

const initialState: BillState = {
  bills: [],
};

export const billSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Bill>) => {
      state.bills = [...state.bills, action.payload];
    },
    remove: (state, action: PayloadAction<Bill>) => {},
    edit: (state, action: PayloadAction<Bill>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, edit } = billSlice.actions;

export default billSlice.reducer;
