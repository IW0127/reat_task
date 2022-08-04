import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

export default function Jsx() {
  const element = React.createElement(
    "h1",
    { className: "greeting" },

    "Hello, world!"
  );
  const element2 = <h1>Hello, {formatName(user)}!</h1>;

  return (
    <>
      {element}
      {element2}
    </>
  );
}
