import React from "react";
import "./TaskManger.css";

const TaskManager = () => {
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [filter, setFilter] = React.useState("");

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setItems((prev) => [...prev, { id: Date.now(), text: inputValue.trim(), completed: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleTask = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const filteredItems = items.filter((item) => {
    if (filter === "completed") {
      return item.completed;
    } else if (filter === "pending") {
      return !item.completed;
    }
    return true;
  });

  return (
    <div className="task-Container">
      <label htmlFor="taskInput">Task:</label>
      <input
        type="text"
        value={inputValue}
        id="taskInput"
        onChange={onChangeHandler}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDeleteTask(item.id)}>Delete</button>
            <span className={item.completed ? "status-completed" : "status-pending"}>
              {item.completed ? "Completed" : "Pending"}
            </span>
            <button onClick={() => handleToggleTask(item.id)}>
              {item.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
