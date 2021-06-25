import React, { FC } from "react";
import { render } from "react-dom";

const App: FC = () => {
  return (
    <div>
      <h1>Qanuk</h1>
      <h2>noun</h2>
      <h3>Definition of qanuk</h3>
      <ol>
        <li>a flake of crystal or snow</li>
      </ol>
    </div>
  );
};

render(<App />, document.getElementById("root"));
