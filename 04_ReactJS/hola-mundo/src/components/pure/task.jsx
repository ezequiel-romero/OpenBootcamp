import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>
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
