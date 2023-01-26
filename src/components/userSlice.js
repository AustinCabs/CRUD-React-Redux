import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Austin Cabanada", email: "austin@austin" },
  { id: "2", name: "Aaron Cabanada", email: "cedrid@cedric" },
];

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action) => {
      //   console.log(action);
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      //   console.log("editUser action payload", action);
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
      
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatedUser = state.filter((user) => user.id !== id);
      return updatedUser
    //   state.push(updatedUser);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
