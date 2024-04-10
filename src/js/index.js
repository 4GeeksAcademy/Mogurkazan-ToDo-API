//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { GetApi } from "./component/apitest";

//render your react application
ReactDOM.render(<GetApi />, document.querySelector("#app"));
