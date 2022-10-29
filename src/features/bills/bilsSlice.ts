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
  bills: [
    {
      id: "0.4051722127781501",
      category: "Food",
      date: 1667059751482,
      description: "a",
      amount: 120,
    },
    {
      id: "0.2885748587106549",
      category: "Food",
      date: 1667059751482,
      description: "a",
      amount: 120,
    },
    {
      id: "0.5987014431107078",
      category: "Food",
      date: 1667059751482,
      description: "fsafasgfa",
      amount: 120,
    },
    {
      id: "0.1241199743859498",
      category: "Food",
      date: 1667059751482,
      description:
        "fsafasgfafsafasgfafsafasgfafsafasgfafsafasgfafsafasgfafsafasgfa",
      amount: 120,
    },
  ],
};

export const billSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Bill>) => {
      state.bills = [...state.bills, action.payload];
    },
    remove: (state, action: PayloadAction<string>) => {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
    },
    edit: (state, action: PayloadAction<Bill>) => {
      for (var i = 0; i < state.bills.length; i++) {
        if (state.bills[i].id === action.payload.id) {
          state.bills[i] = action.payload;
          break;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, edit } = billSlice.actions;

export default billSlice.reducer;
