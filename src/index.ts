import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

const containerElement = renderContainerElement("todo-app");
ReactDOM.render(React.createElement(TodoApp), containerElement);

function renderContainerElement(containerId: string): HTMLElement {
  const containerElement = window.document.createElement("div");
  window.document.body.appendChild(containerElement);
  containerElement.id = containerId;
  return containerElement;
}
