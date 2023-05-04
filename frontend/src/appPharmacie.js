import create from "zustand";

import { persist } from "zustand/middleware";

let appPharmacie = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

appPharmacie = persist(appPharmacie, { name: "Pharmacie Geolocation" });
export const useAppPharmacie = create(appPharmacie);
