import { createSlice } from "@reduxjs/toolkit";
import { addToStorage } from "../utils/storages";

const initData = {
  items: [],
  invoice: {
    totalPrice: 0,
  },
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initData,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      const alreadyExist = state.items.some((_item) => _item.id === item.id);

      if (alreadyExist) {
        state.invoice = { totalPrice: state.invoice.totalPrice + item.price };
        state.items = state.items.map((_item) => {
          if (_item.id === item.id) {
            return {
              ..._item,
              quantity: _item.quantity + 1,
            };
          }
          return _item;
        });
      } else {
        state.invoice = { totalPrice: state.invoice.totalPrice + item.price };
        state.items = [...state.items, { ...item, quantity: 1 }];
      }
    },
    removeItem(state, action) {
      const item = action.payload;
      const shouldRemove = item.quantity === 1;
      if (shouldRemove) {
        state.invoice = { totalPrice: state.invoice.totalPrice - item.price };
        state.items = state.items.filter((_item) => _item.id !== item.id);
      } else {
        state.invoice = { totalPrice: state.invoice.totalPrice - item.price };
        state.items = state.items.map((_item) => {
          if (_item.id === item.id) {
            return {
              ...item,
              quantity: _item.quantity - 1,
            };
          }
          return _item;
        });
      }
      addToStorage("basket-items", {
        invoice: state.invoice,
        items: state.items,
      });
    },
  },
});

const { actions, reducer } = basketSlice;
export const { addItem, removeItem } = actions;
export const basketState = (state) => state.basket;
export default reducer;
