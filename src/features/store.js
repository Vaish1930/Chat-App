import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import chatRoomReducer from "./chatRoomSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chatRoom: chatRoomReducer,
  },
});
