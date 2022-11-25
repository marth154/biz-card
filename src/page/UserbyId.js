import React from "react";
import { useParams } from "react-router-dom";

export default function UserbyId() {
  let { id } = useParams();

  return (
    <div className="User">
      <p>Page USER : {id}</p>
      <a href="/">To page app</a>
    </div>
  );
}
