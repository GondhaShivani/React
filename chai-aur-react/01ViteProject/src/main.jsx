import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
/* 
function myApp() {
  return (
    <div>
      <h1>Hiiiii</h1>
    </div>
  );
}
 */

/* 
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
 */

/* 
const otherUser = "shivani";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click for google visit",
  otherUser
);
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <reactElement />
  </React.StrictMode>
);
