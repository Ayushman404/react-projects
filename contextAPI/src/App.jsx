import React from "react";
import TodoForm from "./components/TodoForm";
import { TodoProvider } from "./contexts/TodoContext";
import TodoItem from "./components/TodoItem";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      )
    );
  };

  //LocalStorage Integration
  useEffect(()=>{
    const localTodos = JSON.parse(localStorage.getItem("todos"))

    if(localTodos && localTodos.length > 0){
      setTodos(localTodos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])






  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, toggleCompleted, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
