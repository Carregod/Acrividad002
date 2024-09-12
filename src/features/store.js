import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Network response was not ok');
  return await response.json();
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    updateUser: (state, { payload }) => {
      const user = state.users.find(user => user.id === parseInt(payload.id));
      if (user) {
        Object.assign(user, payload); 
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.status = 'succeeded';
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
