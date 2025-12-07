import { create } from "zustand";

export const cartStore = create((set) => ({
  isOpen: false,
  cart: [],
  openCart: () => set(() => ({ isOpen: true })),
  closeCart: () => set(() => ({ isOpen: false })),
  addToCart: (item) => set((state) => ({ cart: [...state.cart], item })),
}));
