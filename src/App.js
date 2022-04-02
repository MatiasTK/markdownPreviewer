import React from "react";
import { useDispatch } from "react-redux";
import { changeInput } from "./redux/RootReducer";
import Banner from './components/Banner';
import TextEditor from './components/TextEditor';
import Previewer from './components/Previewer';
import './App.css';

const example = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default function App() {
  const dispatch = useDispatch();
  dispatch(changeInput(example));

  return (
    <div className="h-screen">
      <Banner />
      <div className="playground bg-indigo-900 w-full h-full grid grid-cols-2 gap-2 overflow-hidden">
        <TextEditor />
        <Previewer />
      </div>
    </div>
  );
}
