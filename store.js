import { configureStore } from "@reduxjs/toolkit";
import bookingsSlice from "./reducers/BookingsSlice";

export const store = configureStore({
  reducer: {
    bookings: bookingsSlice,
  },
});
