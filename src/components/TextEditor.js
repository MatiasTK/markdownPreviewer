import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../redux/RootReducer";
import { marked } from 'marked';

export default function TextEditor() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div>
      <textarea
        style={{ backgroundColor: "#272822" }}
        className="text-white p-5 resize-none h-full outline-none w-full"
        onInput={(e) => dispatch(changeInput(e.target.value))}
        value={state}
        id="editor"
        spellCheck="false"
      ></textarea>
    </div>
  );
}
