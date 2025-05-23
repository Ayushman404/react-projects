import React from 'react'
import TodoItem from './TodoItem'

function TodoList({tasks, setTasks}) {
  return (
    <div>
        {tasks.map((task, index) => (
            <TodoItem
                key={index}
                taskName={task.taskName}
                isChecked={task.isChecked}
                handleDelete={() => {
                    setTasks(tasks.filter((_, i) => i !== index));
                }}
                handleEdit={() => {
                    const newTaskName = prompt("Edit task name", task.taskName);
                    if (newTaskName) {
                        setTasks(tasks.map((t, i) => (i === index ? { ...t, taskName: newTaskName } : t)));
                    }
                }}
                handleCheck={() => {
                    const newTasks = [...tasks];
                    newTasks[index].isChecked = !newTasks[index].isChecked;
                    setTasks(newTasks);
                }}
            />
        ))}
    </div>
  )
}

export default TodoList