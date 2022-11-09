import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./axios";

const initialState = {
  chatRooms: [],
};

const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    createRoom: (state, action) => {
      state.chatRooms = [...state.chatRooms, action.payload];
    },

    deleteRoom: (state, action) => {
      state.chatRooms = state.chatRooms.filter(
        (room) => room._id !== action.payload
      );
    },

    setRoom: (state, action) => {
      state.chatRooms = action.payload;
    },
  },
});

export const { createRoom, setRoom, deleteRoom } = chatRoomSlice.actions;

//thunks
export const createRoomAsync = createAsyncThunk(
  "chatRoom/createRoomAsync",
  async (roomData, { dispatch, rejectWithValue, getState }) => {
    try {
      const store = getState();

      const { data } = await axios.post("chatRooms/create", roomData, {
        headers: { authToken: store.auth.user.token },
      });

      dispatch(createRoom(data));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteRoomAsync = createAsyncThunk(
  "chatRoom/deleteRoomAsync",
  async (chatRoomId, { dispatch, rejectWithValue, getState }) => {
    try {
      const store = getState();
      const { data } = await axios.delete(`/chatRooms/delete/ ${chatRoomId}`, {
        headers: { authToken: store.auth.user.token },
      });
      dispatch(deleteRoom(data.chatRoomId));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const setRoomAsync = createAsyncThunk(
  "setRoom/deleteRoomAsync",
  async (_, { dispatch, rejectWithValue, getState }) => {
    try {
      const store = getState();
      const { data } = await axios.get("/chatRooms ", {
        headers: { authToken: store.auth.user.token },
      });
      dispatch(setRoom(data));
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const selectRooms = (state) => state.chatRoom.chatRooms;

export default chatRoomSlice.reducer;
