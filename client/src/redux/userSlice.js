import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  isAuthenticated: false,
  questionsAndAnswers: [],
  dietPlans: [],
  workoutPlans: [],
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
      if (!action.payload) {
        state.questionsAndAnswers = [];
        state.userInfo = null;
      }
    },
    setQuestionsAndAnswers: (state, action) => {
      state.questionsAndAnswers.push(action.payload);
    },
    setDietPlans: (state, action) => {
      state.dietPlans.push(action.payload);
    },

    setWorkoutPlans: (state, action) => {
      state.workoutPlans.push(action.payload);
    },
  },
});

//createSlice creates some actions from reducers

export const {
  setUserInfo,
  setAuthenticated,
  setQuestionsAndAnswers,
  setDietPlans,
  setWorkoutPlans,
} = userSlice.actions;

export default userSlice.reducer;
