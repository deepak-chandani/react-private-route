import React from "react";
import fakeAuth from "../utils/fakeAuth";

export default props => {
  const onClick = () => {
    const { history } = props;
    fakeAuth.signout(() => {
      history.push("/login");
    });
  };

  return (
    <div>
      <h1> Dashboard page </h1>
      <button type="button" onClick={onClick}>
        Logout
      </button>
    </div>
  );
};
