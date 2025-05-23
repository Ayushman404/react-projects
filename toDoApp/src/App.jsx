import { useState, useRef, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App() {
  const [tasks, setTasks] = useState([{taskName:"Listen One Chapter of Atomic Habits", isChecked:false}]);
  const [taskInput, setTaskInput] = useState("");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = ()=>{
    setTaskInput(inputRef.current.value.trim());
    if(taskInput === "") return;
    const newTask = {
      taskName: taskInput,
      isChecked: false
    }
    console.log(taskInput);
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
    //logic for adding task
    setTaskInput("");
  }

  useEffect(handleAdd, [taskInput]);
  

    return (
      <>
        {/* <h1>Ayushman Kumar</h1> */}
        <TodoInput handleAdd = {handleAdd} inputRef={inputRef}/>

        <TodoList tasks = {tasks} setTasks={setTasks}/>
      </>
    )
}

export default App
