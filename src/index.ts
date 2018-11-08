import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

const containerId = "todo-app";
renderDOM();
renderReactDOM();

function renderDOM() {
  const oldContainer = document.getElementById(containerId);
  if (oldContainer) {
    document.removeChild(oldContainer);
  }
  const container = document.createElement("div");
  container.id = containerId;
  document.body.appendChild(container);
}

function renderReactDOM() {
  const container = document.getElementById(containerId);
  ReactDOM.render(React.createElement(TodoApp), container);
}
