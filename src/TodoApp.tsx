import React from "react";

interface Todo {
  completed: boolean;
  title: string;
}

export default class TodoApp extends React.Component {
  public readonly state: {
    todos: Todo[];
  };

  constructor(props) {
    super(props);
    this.state = {
      todos: [{ completed: false, title: "myFirstTodo" }]
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.handleClickTodo = this.handleClickTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
  }

  public render() {
    return (
      <>
        <h1>Hello!</h1>
        <ul>{this.state.todos.map(this.renderTodos)}</ul>
      </>
    );
  }

  private toggleTodo(todoIndex) {
    const { todos } = this.state;
    const { completed, title } = this.state.todos[todoIndex];
    this.setState({
      todos: [
        ...todos.slice(0, todoIndex),
        { completed: !completed, title },
        ...todos.slice(todoIndex + 1)
      ]
    });
  }

  private handleClickTodo(todoIndex) {
    this.toggleTodo(todoIndex);
  }

  private renderTodos({ completed, title }: Todo, todoIndex) {
    return (
      <li
        key={todoIndex}
        onClick={this.handleClickTodo.bind(this, todoIndex)}
        style={{ textDecoration: completed ? "line-through" : null }}
      >
        {title}
      </li>
    );
  }
}
