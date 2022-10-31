// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example 1', 'description 1', false, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'description 3', true, LEVELS.BLOCKING)

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    // const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    // useEffect(() => {
    //     console.log('Task State has been modified');
    //     setLoading(false)
    //     return () => {
    //         console.log('TaskList Component is going to unmount');
    //     };
    // }, [tasks]);

    function completeTask(task) {
        console.log('Complete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        // We update the state of the component and it will update
        // the iteration of the tasks in order to show the tasks updated
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        console.log('Delete this task:', task)
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', heigh: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={index}
                                            task={task}
                                            complete={completeTask}
                                            remove={deleteTask}>
                                        </TaskComponent>
                                    )
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <TaskForm
                add={addTask}>
            </TaskForm>
            
        </div>
    );
};


export default TaskListComponent;
