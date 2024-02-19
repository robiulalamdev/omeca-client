import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialNodes: [
    {
      id: "1",
      type: "custom",
      data: {
        id: "1",
        name: "Robiul Alam",
        job: "CEO",
        emoji: "😎",
        component: "Int",
      },
      position: { x: 0, y: 0 },
    },
  ],
  initialEdges: [],
  activeComponent: null,
  actionData: null,
};

const globalsSlice = createSlice({
  name: "Global slice",
  initialState,
  reducers: {
    setInitialNodes: (state, action) => {
      state.initialNodes = action.payload;
    },
    setInitialEdges: (state, action) => {
      state.initialEdges = action.payload;
    },
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
    setActionData: (state, action) => {
      state.actionData = action.payload;
    },
  },
});

export const {
  setInitialNodes,
  setInitialEdges,
  setActiveComponent,
  setActionData,
} = globalsSlice.actions;

export default globalsSlice.reducer;
