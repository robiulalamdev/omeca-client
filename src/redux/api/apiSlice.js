import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CONFIG } from "../../config";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.SERVER_URL,
    prepareHeaders: (headers) => {
      const token = `Bearer ${localStorage.getItem(CONFIG.ACCESS_TOKEN_NAME)}`;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["users", "chats", "histories", "templates"],
  endpoints: () => ({}),
});
