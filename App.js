import React from "react";
import ReactDOM from "react-dom";

/**
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h1>Hi I am a h1 tag</h1>
 *          <h2>Hi I am a h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>Hi I am a h1 tag</h1>
 *          <h2>Hi I am a h2 tag</h2>
 *      </div>
 * </div>
 *  ReactElement(Object) => HTML(Browser Understands)
 */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );

// const rootJs = document.getElementById("root");

// const headingJs = document.createElement("h1");
// headingJs.innerHTML = "inserted using js";
// console.log(headingJs);

// console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hi I am a h1 tag"),
    React.createElement("h2", {}, "Hi I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am a h1 tag"),
    React.createElement("h2", {}, "Hi I am a h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const heading = React.createElement("h1", {}, "testing multiple roots");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading);
