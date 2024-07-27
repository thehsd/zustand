import { useState } from "react";
import GetUserInfo from "../Components/GetUserInfo";
import ShowUserInfo from "../Components/ShowUserInfo";
import { UserInfoContext } from "./context/UserInfoContext";

const User = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    job: "",
    age: "",
  });
  const contextValue = { userInfo, setUserInfo };
  return (
    <div className="grid grid-cols-2">
      <UserInfoContext.Provider value={contextValue}>
        <GetUserInfo />
        <ShowUserInfo />
      </UserInfoContext.Provider>
    </div>
  );
};

export default User;
