import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
        <h1>TODO LISTS</h1>
        <TaskList title="Todo" tasks={['buy Milk', 'call Mom']} />
        <TaskList title="Wip" tasks={['AWI', 'PF']} />
    </div>
  );
}

export default App;
