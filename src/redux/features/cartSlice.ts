import { updateItem } from "@/app/(user)/fetchData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  checkout: [],
} as any;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemProps>) => {
      // const itemInCart = state.cart.find(
      //   (item: any) => item?.id === action.payload?.id
      // );
      // if (itemInCart) {
      //   itemInCart.quantity++;
      // } else {
      //   state.cart.push({ ...action.payload, quantity: 1 });
      // }

      state.cart = action.payload;
    },
    incrementQuantity: (state, action) => {
      const seletedItem = state.cart.find(
        (item: CartItemProps) => item.product_id === action.payload
      );
      seletedItem.product_quantity++;
      updateItem(seletedItem?.product_id, seletedItem.product_quantity);
    },
    decrementQuantity: (state, action) => {
      const seletedItem = state.cart.find(
        (item: CartItemProps) => item.product_id === action.payload
      );
      if (seletedItem.product_quantity == 1) {
        seletedItem.product_quantity = 1;
      } else {
        seletedItem.product_quantity--;
      }
      updateItem(seletedItem?.product_id, seletedItem.product_quantity);
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item: CartItemProps) => item.id !== action.payload
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
