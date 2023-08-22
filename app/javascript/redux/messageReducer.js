import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  message: '',
}

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
  const response = await fetch('/api/messages');
  const data = await response.json();
  return data.text;
});

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.value = action.payload;
      });
  },
})

const reducer = messageSlice.reducer
export default reducer