import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Bill {
  id: string;
  description: string;
  category: "Utility" | "Food" | "Education";
  amount: number;
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
    add: (state, action: PayloadAction<Bill>) => {},
    remove: (state, action: PayloadAction<Bill>) => {},
    edit: (state, action: PayloadAction<Bill>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, edit } = billSlice.actions;

export default billSlice.reducer;
