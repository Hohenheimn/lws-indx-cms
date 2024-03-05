import { configureStore } from "@reduxjs/toolkit";

import Doctor from "./selectedDoctor/selectedDoctorSlice";

export const store = configureStore({
  reducer: {
    selectedDoctor: Doctor,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
