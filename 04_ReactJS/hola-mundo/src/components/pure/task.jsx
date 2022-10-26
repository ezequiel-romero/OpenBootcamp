import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos task.scss
import '../../styles/task.scss'

const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Task created');
        return () => {
            console.log(`Task ${task.name} is going to unmount`);
        };
    }, [task]);

    return (
        <div>
            <h2 className='task-name'>
                Name: { task.name }
            </h2>
            <h3>
                Description: { task.desc }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    // Definir el task que se le pasa al componente como de tipo Task
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
