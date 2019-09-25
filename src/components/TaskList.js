import React from 'react';
import Task from './Task'
import AddTask from '../containers/AddTask'

const TaskList = ({title, tasks}) => (
        <div style={{ display: 'inline-block' }}>
                <h2>{title}</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <Task key={index} name={task} {...task} />
                    ))}
                </ul>
                <AddTask/>
            </div>
  )
/*
                <TaskForm handleClick={this.addTask} />

                
class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: this.props.tasks
        }
        this.addTask = (newTask) => {
            let newState = this.state.tasks
            newState.push(newTask)
            this.setState({
                tasks: newState
            })
        }
    }

    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                <h2>{this.props.title}</h2>
                <ul>
                    {this.props.tasks.map(
                        t => <Task name={t} />
                    )}
                </ul>
                <TaskForm handleClick={this.addTask} />
            </div>
        )
    }
}
*/
export default TaskList;