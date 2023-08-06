import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  checkout: [],
} as any;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: any, action: PayloadAction<any>) => {
      const itemInCart = state.cart.find(
        (item: any) => item?.id === action.payload?.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      console.log("itemInCart>>>>", action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item: any) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item: any) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    clearItems: (state) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addItem,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearItems,
} = cartSlice.actions;
