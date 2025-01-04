import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [
    {
      img: require("../assets/place.png"),
      name: "Prime Cut Steakhouse",
      address: "55 T-Bone Lane, England",
      rating: 4.9,
      about:
        "Renowned for its premium cuts and expertly grilled steaks, Prime Cut is a haven for meat lovers.",
      phone: "+44 6655 887766",
      website: "https://primecutsteakhouse.com",
      price: 450,
      guests: 3,
      date: "Fri, Mar 4",
      time: "4:00 PM",
    },
  ],
  user: {
    name: "",
    email: "",
    request: "",
  },
  bookDetails: {
    guests: "",
    date: "",
    time: "",
  },
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.bookDetails = action.payload;
    },
    addPlace: (state, action) => {
      state.bookings.push(action.payload);
    },
    addUserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addDetails, addPlace, addUserDetails } = bookingsSlice.actions;
export default bookingsSlice.reducer;
