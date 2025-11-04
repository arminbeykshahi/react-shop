import { create } from "zustand";

export const usePurchaseStore = create((set) => ({
  basket: [],
  addtobasket: (item) => set(({ basket }) => ({ basket: [...basket, item] })),
  deletebasket: (id) =>
    set(({ basket }) => ({ basket: basket.filter((item) => item.id != id) })),
}));
