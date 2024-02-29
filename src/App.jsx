import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useState("foo");
  const [name, setName] = useState("");
  return (
    <div>
      <Navbar theme={theme} name={name} setName={setName} />
      <Header />
    </div>
  );
};

export default App;
