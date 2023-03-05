import { createSlice } from "@reduxjs/toolkit";

const initialState: { isVisible: boolean; content: JSX.Element | null } = {
  isVisible: false,
  content: null, // loading | success | error
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    closePopup: (state, action) => {
      state.isVisible = false;
      state.content = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openPopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;
