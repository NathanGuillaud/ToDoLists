import React from 'react';
import TaskForm from './TaskForm';

const Task = (props) => {
    return <li>{props.name}</li>
}

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

export default TaskList;