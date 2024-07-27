import { createContext } from "react";

export const UserInfoContext = createContext({
  userInfo: {
    userName: "",
    job: "",
    age: "",
  },
  setUserInfo: () => {},
});
