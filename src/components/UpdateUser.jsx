import { useMutation } from "@tanstack/react-query";
import React, { useRef } from "react";

const UpdateUser = () => {
  async function updateUserFn(dataForm) {
    // fetch
  }

  const [mutate, { isLoading, isError }] = useMutation(updateUserFn);

  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataFrom = new FormData(formRef.current);
    const data = Object.entries(dataFrom);
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        {/* inputs */}
        {/* inputs */}
        {/* inputs */}
        {/* inputs */}

        <button>submit</button>
      </form>
    </div>
  );
};

export default UpdateUser;
