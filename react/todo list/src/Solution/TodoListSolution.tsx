import { useState } from 'react';
import './TodoListSolution.css';

interface Task {
  value: string;
  isCompleted: boolean;
}

function TodoListSolution() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //checking if enter key is pressed and input value is not empty
    if (e.key === 'Enter' && inputValue.trim()) {
      // Prevent the default action to stop submitting the form
      e.stopPropagation();
      // copy the tasks array and add the new task to it
      setTasks([...tasks, { value: inputValue, isCompleted: false }]);
      // clear the input value
      setInputValue('');
    }
  };

  const onDeleteButtonPress = (taskToDelete: string) => {
    // filter out the task that needs to be deleted
    const tempTasks = tasks.filter(({ value }) => value !== taskToDelete);
    setTasks(tempTasks);
  };

  const onTaskCompleted = (taskToComplete: string) => {
    // map over the tasks and toggle the isCompleted value of the task that needs to be completed
    const updatedTasks = tasks.map((task) => {
      if (task.value === taskToComplete) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <label htmlFor="task-input">Create a new todo</label>
      <input
        id="task-input"
        name="task name"
        value={inputValue}
        placeholder="Create a new todo"
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      {tasks.map(({ value, isCompleted }, index) => (
        <div key={index} role="listitem">
          <span className={isCompleted ? 'task-completed' : 'task-not-completed'}>
            {value}
          </span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => onTaskCompleted(value)}
            aria-label={`Mark ${value} as completed`}
          />
          <button onClick={() => onDeleteButtonPress(value)} aria-label={`Delete ${value}`}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default TodoListSolution;