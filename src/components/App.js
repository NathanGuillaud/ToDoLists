import React from 'react';
import './App.css';
import TaskList from './TaskList';
import Task from './Task'

function App() {
  return (
    <div className="App">
        <h1>TODO LISTS</h1>
        <TaskList title="Todo" tasks={[]} />
        <TaskList title="Wip" tasks={[]} />
    </div>
  );
}
/*<TaskList title="Todo" tasks={['buy Milk', 'call Mom']} />
        <TaskList title="Wip" tasks={['AWI', 'PF']} />*/
export default App;
