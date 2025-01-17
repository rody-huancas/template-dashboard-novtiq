import { devtools, persist } from "zustand/middleware";
import { StateCreator, create } from "zustand";
import { ThemeState } from "@/schemas/types/store.types";

const storeApi: StateCreator<ThemeState> = (set) => ({
  theme     : false,
  menuIsOpen: false,

  setTheme     : (theme: boolean) => set({ theme }),
  setMenuIsOpen: (value: boolean) => set({ menuIsOpen: value }),
});

export const useThemeStore = create<ThemeState>()(
  devtools(persist(storeApi, { name: "theme-ui-novtiq" }))
);