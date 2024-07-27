import React, { useContext, useRef } from "react";
import { UserInfoContext } from "../Pages/context/UserInfoContext";

const GetUserInfo = () => {
  const formRef = useRef(null);
  const { setUserInfo } = useContext(UserInfoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const userData = {};
    for (let info of data.entries()) {
      userData[info[0]] = info[1];
    }
    setUserInfo(userData);
  };
  return (
    <div>
      <form ref={formRef}>
        <input
          className="bg-yellow-100 border border-solid border-black m-2"
          type={"text"}
          placeholder={"username"}
          name={"userName"}
        />
        <br />
        <input
          className="bg-yellow-100 border border-solid border-black m-2"
          type={"text"}
          placeholder={"age"}
          name={"age"}
        />
        <br />
        <input
          className="bg-yellow-100 border border-solid border-black m-2"
          type={"text"}
          placeholder={"job"}
          name={"job"}
        />
        <br />
        <button onClick={handleSubmit} className="bg-gray-400 rounded p-3 m-2">
          {" "}
          submit form
        </button>
      </form>
    </div>
  );
};

export default GetUserInfo;
