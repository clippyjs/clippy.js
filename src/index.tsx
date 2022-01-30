import * as ReactDOM from "react-dom";
import { initiateClippy } from "../lib";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    initiateClippy("Clippy", { debug: true }).then(el => {
      el.show();
    });
  });
  return <h1>Hello world!</h1>;
}

const app = document.getElementById("app");
ReactDOM.render(<App/>, app);
