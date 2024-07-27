import { useContext } from "react";
import { UserInfoContext } from "../Pages/context/UserInfoContext";

const ShowUserInfo = () => {
  const { userInfo } = useContext(UserInfoContext);
  const { userName, job, age } = userInfo;
  return (
    <div>
      {Boolean(userName) && <p> userName: {userName}</p>}
      {Boolean(job) && <p> job: {job}</p>}
      {Boolean(age) && <p> age: {age}</p>}
    </div>
  );
};

export default ShowUserInfo;
