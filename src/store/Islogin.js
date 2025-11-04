import { create } from "zustand";

export const useLoginStore = create((set) => ({
  islogin: false,
  username: "",
  checklogin: () => set(({ islogin }) => ({ islogin: !islogin })),
  getusername: (user) => set(() => ({ username: user })),
}));
