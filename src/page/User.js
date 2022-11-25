import React from "react";
import ClientAPI from "../client/clientApi";

export default function User() {

  const fetchData = async () => {
    const data = await new ClientAPI("/").get()
    console.log(data)
  }


  return (
    <div className="User">
      <p>Page USER</p>
      <a href="/">To page app</a>
      <button onClick={() => fetchData()}>Fecth data</button>
    </div>
  );
}
