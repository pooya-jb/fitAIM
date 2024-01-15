import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  questionsAndAnswers: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setQuestionsAndAnswers: (state, action) => {
      state.questionsAndAnswers.push(action.payload);
    },
  },
});

//createSlice creates some actions from reducers

export const { setUserInfo, setAuthenticated, setQuestionsAndAnswers } =
  userSlice.actions;

export default userSlice.reducer;
