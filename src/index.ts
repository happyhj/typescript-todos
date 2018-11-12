import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

ReactDOM.render(
  React.createElement(TodoApp),
  renderContainerElement("todo-app")
);

function renderContainerElement(containerId: string): HTMLElement {
  const containerElement = window.document.createElement("div");
  window.document.body.appendChild(containerElement);
  containerElement.id = containerId;
  return containerElement;
}
