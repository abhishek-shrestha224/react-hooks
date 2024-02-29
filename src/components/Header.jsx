import React, { useEffect, useState } from "react";

const Header = () => {
  const [value, setValue] = useState([]);
  const [url, setUrl] = useState("");
  console.log(value);

  useEffect(() => {
    console.log("Calliing API");
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setValue(json);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [url]);

  return (
    <div>
      <button
        onClick={(e) => {
          setUrl("https://jsonplaceholder.typicode.com/users");
        }}
      >
        Users
      </button>
      <button
        onClick={(e) => {
          setUrl("https://jsonplaceholder.typicode.com/comments");
        }}
      >
        Comments
      </button>
      <button
        onClick={(e) => {
          setUrl("https://jsonplaceholder.typicode.com/posts");
        }}
      >
        Posts
      </button>

      <div>
        {value.map((a, i) => (
          <p key={i}>{a.id}</p>
        ))}
      </div>
    </div>
  );
};

export default Header;
