import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

// Importamos la hoja de estilos task.scss
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({ task, complete, remove }) => {

    // useEffect(() => {
    //     console.log('Task created');
    //     return () => {
    //         console.log(`Task ${task.name} is going to unmount`);
    //     };
    // }, [task]);

    /**
     * Función que retorna un badge dependiendo del nivel de la tarea
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:    
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>{ task.level }</span>
                    </h6>
                )
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{ task.level }</span>
                    </h6>
                )
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{ task.level }</span>
                    </h6>
                )
            default:
                break;
        }
    }

    /**
     * Función que retorna un toggle dependiendo del estado de la tarea
     */
    function taskStateToggle(){
        if (task.completed) {
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color : 'green'}}></i>)
        } else {
            return(<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color : 'gray'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th className='px-3'>
                <span>{ task.name }</span>
            </th>
            <td className='align-middle px-3'>
                <span>{ task.desc }</span>
            </td>
            <td className='align-middle px-3'>
                {/* Ejecutamos la funcion para que nos devuelva el badge de acuerdo al LEVEL de la tarea */}
                { taskLevelBadge() }
            </td>
            <td className='align-middle px-3'>
                {/* Ejecutamos la funcion para que nos devuelva un ícono de acuerdo al estado de la tarea */}
                { taskStateToggle() }
                <i className='bi-trash ps-1 task-action' onClick={() => remove(task)} style={{color : 'tomato'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    // Definir el task que se le pasa al componente como de tipo Task
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
