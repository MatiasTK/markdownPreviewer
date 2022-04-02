import React from "react";
import { useSelector } from "react-redux";
import { marked } from 'marked';

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
