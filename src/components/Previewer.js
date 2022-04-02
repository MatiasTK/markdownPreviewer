import React from "react";
import { useSelector } from "react-redux";
import * as marked from "https://cdn.skypack.dev/marked@4.0.12";

export default function Previewer() {
  const state = useSelector((state) => state);

  return (
    <div
      id="preview"
      style={{ backgroundColor: "#272822" }}
      dangerouslySetInnerHTML={{ __html: marked.parse(state) }}
      className="text-white p-5 leading-5"
    ></div>
  );
}
