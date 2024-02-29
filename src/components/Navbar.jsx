import React, { useRef } from "react";

const Navbar = ({ theme, name, setName }) => {
  // const nameRef = useRef("");
  // console.log(nameRef);
  // console.log(nameRef.current.value);
  return (
    <>
      <h1>Navbar</h1>
      <input
        type="text"
        value={name}
        // ref={nameRef}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          // user.name=name
          console.log(name);
          setName("");
        }}
      >
        Click Here
      </button>
      {theme}
      {name}
    </>
  );
};

export default Navbar;
