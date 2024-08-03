/* eslint-disable no-unused-vars */
import { api } from "../../api/apiSlice";
import { setConversations, setCurrentHistory, setHistories } from "./chatSlice";

const chatApi = api.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: ({ data }) => ({
        url: `/chats/send-prompt`,
        method: "POST",
        body: data,
      }),
    }),

    getMyHistories: builder.query({
      query: () => `/chats/histories/my-history`,
      providesTags: ["histories"],
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        const result = await queryFulfilled;
        dispatch(setHistories(result?.data?.data));
      },
    }),

    getMessagesByHistoryId: builder.query({
      query: (historyId) => `/chats/messages/${historyId}`,
      providesTags: ["histories"],
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        const result = await queryFulfilled;
        dispatch(setConversations(result?.data?.data));
        dispatch(setCurrentHistory(result?.data?.history));
      },
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMyHistoriesQuery,
  useGetMessagesByHistoryIdQuery,
} = chatApi;
