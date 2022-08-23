import { createSlice } from "@reduxjs/toolkit";

const newUserSlice = createSlice({
  name: "newUser",
  initialState: {
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    staff: false,
    marchant: false,
    customer: false,
  },
  reducers: {
    setNewUser: (state, action) => {
      const {
        email,
        password,
        fullName,
        phoneNumber,
        staff,
        marchant,
        customer,
      } = action.payload;
      state.email = email;
      state.password = password;
      state.fullName = fullName;
      state.phoneNumber = phoneNumber;
      state.staff = staff;
      state.marchant = marchant;
      state.customer = customer;
    },
  },
});

export const { setNewUser } = newUserSlice.actions;

export default newUserSlice.reducer;

export const newUserEmail = (state) => state.newUser.email;
export const newUserPswd = (state) => state.newUser.password;
export const newUserfullName = (state) => state.newUser.fullName;
export const newUserPhnNum = (state) => state.newUser.phoneNumber;
export const newUserIsMchn = (state) => state.newUser.marchant;
export const newUserIsCus = (state) => state.newUser.customer;
export const newUserIsStf = (state) => state.newUser.Staff;
