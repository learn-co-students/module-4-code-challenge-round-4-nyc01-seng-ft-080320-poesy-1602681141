import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// json-server --watch db.json -p 6001 & open http://localhost:6001/poems & 