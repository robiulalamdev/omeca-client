import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session_user: null,
  conversations: [],
  currentHistory: null,
  histories: [],
  isResLoading: false,
  isWriting: "None",
  currentUserPrompt: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSession_user: (state, action) => {
      state.session_user = action.payload;
    },
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setPushConversation: (state, action) => {
      state.conversations.push(action.payload);
    },
    setIsResLoading: (state, action) => {
      state.isResLoading = action.payload;
    },
    setHistories: (state, action) => {
      state.histories = action.payload;
    },
    setPushHistory: (state, action) => {
      state.histories.push(action.payload);
    },
    setCurrentHistory: (state, action) => {
      state.currentHistory = action.payload;
    },
    setIsWriting: (state, action) => {
      state.isWriting = action.payload;
    },
    setCurrentUserPrompt: (state, action) => {
      state.currentUserPrompt = action.payload;
    },
  },
});

export const {
  setSession_user,
  setConversations,
  setPushConversation,
  setIsResLoading,
  setHistories,
  setPushHistory,
  setCurrentHistory,
  setIsWriting,
  setCurrentUserPrompt,
} = chatSlice.actions;

export default chatSlice.reducer;
