import React, { useState } from "react";
import Modal from "./components/modal/Modal";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import TodoItem from "./components/todo-item/TodoItem";
import "./App.css";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_MOCK);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const openAddModal = () => {
    setEditingTodo(null);
    setTitle("");
    setDescription("");
    setIsModalOpen(true);
  };

  const openEditModal = (todo) => {
    setEditingTodo(todo);
    setTitle(todo.title);
    setDescription(todo.description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e, resetFields = true) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTodo) {
      setTodos(
        todos.map((t) =>
          t.id === editingTodo.id ? { ...t, title, description } : t
        )
      );
    } else {
      const newTodo = {
        id: Date.now().toString(),
        title,
        description,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    if (resetFields) {
      setTitle("");
      setDescription("");
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const activeTodos = todos.filter((t) => !t.completed);
  const completedTodos = todos.filter((t) => t.completed);

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <h2>Create Todo</h2>
          <form onSubmit={(e) => handleSubmit(e, false)}>
            <Input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button type="submit">Create</Button>
          </form>
          <p style={{ fontSize: "12px", opacity: 0.7 }}>
            Poți adăuga todo direct de aici sau folosește modalul.
          </p>
        </Card>

        <Card>
          <h1>My todos</h1>
          <Button onClick={openAddModal}>Add +</Button>

          <div className="list-container">
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={() => toggleCompleted(todo.id)}
                onDelete={() => handleDelete(todo.id)}
                onEdit={() => openEditModal(todo)}
              />
            ))}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={() => toggleCompleted(todo.id)}
                onDelete={() => handleDelete(todo.id)}
                onEdit={() => openEditModal(todo)}
              />
            ))}
          </div>
        </Card>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form className="modal-form" onSubmit={handleSubmit}>
          <h2>{editingTodo ? "Edit Todo" : "Add Todo"}</h2>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
          />
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <Button type="submit">{editingTodo ? "Save" : "Add"}</Button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
