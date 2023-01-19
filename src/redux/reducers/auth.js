import {createSlice} from '@reduxjs/toolkit';

// import {loginAction} from '../action/auth';

const initialState = {
  token: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const {email, password} = action.payload;
      if (email === 'admin@mail.com' && password === 'admin') {
        state.token = 'sometoken';
      }
    },
    logout: () => {
      return initialState;
    },
  },
  // extraReducers: build => {
  //   build.addCase(loginAction.fulfilled, (state, {payload}) => {
  //     state.token = payload.token;
  //   });
  // },
});

export const {login: loginAction, logout: logoutAction} = auth.actions;

export default auth.reducer;
