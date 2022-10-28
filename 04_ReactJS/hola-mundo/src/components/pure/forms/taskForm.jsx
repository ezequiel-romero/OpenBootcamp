import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add}) => {

    const nameRef = useRef('')
    const descRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descRef.current.value,
            false,
            levelRef.current.value,
        )
        add(newTask)
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mt-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' placeholder='Task Name' className='form-control mb-2' required autoFocus />
                <input ref={descRef} id='inputDesc' type='text' placeholder='Task Description' className='form-control mb-2' required />
                <label htmlFor='selectLevel' className='sr-only'>Priority:</label>
                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-sm d-block'>Add Task</button>
            </div>
        </form>
    );
}

TaskForm.propTypes ={
    add: PropTypes.func.isRequired
}

export default TaskForm;
