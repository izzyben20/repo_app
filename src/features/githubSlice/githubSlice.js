import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  repos: [],
  loading: false,
  err: null,
};

const url = 'https://api.github.com/users/izzyben20/repos';

export const getRepos = createAsyncThunk(
  'repo/getRepos',
  async (_, thunkAPI) => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Opps there seems to be an error, try again!'
      );
    }
  }
);

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {},
  extraReducers: {
    [getRepos.pending]: (state) => {
      state.loading = true;
    },
    [getRepos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.repos = payload;
    },
    [getRepos.rejected]: (state) => {
      state.loading = false;
      state.err = true;
    },
  },
});

export const repoReducer = repoSlice.reducer;
