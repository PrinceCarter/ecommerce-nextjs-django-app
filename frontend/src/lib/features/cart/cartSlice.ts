import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // Key names will be used to generate actions.
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
