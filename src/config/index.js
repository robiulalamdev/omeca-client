const accessTokenName = "omeca";

export const CONFIG = {
  SERVER_URL: import.meta.env.VITE_SERVER_URL,
  ACCESS_TOKEN_NAME: accessTokenName,
  ACCESS_TOKEN: localStorage.getItem(accessTokenName),
};
