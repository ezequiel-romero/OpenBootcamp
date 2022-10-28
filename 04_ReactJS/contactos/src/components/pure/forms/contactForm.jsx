import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';
import PropTypes from 'prop-types';

const ContactForm = ({add}) => {

    const contactName = useRef('')
    const contactPicture = useRef('')
    const contactEmail = useRef('')
    const contactGender = useRef('')

    function addContact(e) {
        e.preventDefault()
        const newContact = new Contact(
            contactName.current.value,
            contactGender.current.value,
            contactEmail.current.value,
            false,
            contactPicture.current.value
        )
        add(newContact)
    }

    return (
        <div>
            <div className='pt-5 text-center'>
                <h4>Add Contact</h4>
            </div>
            <form onSubmit={addContact} className='d-flex flex-column'>
                <div className='d-flex flex-column pb-4'>
                    <label>Name:</label>
                    <input ref={contactName} type='text' id='contactName' className='form-control' placeholder='Contact name' required autoFocus></input>
                </div>
                <div className='d-flex flex-column pb-4'>
                    <label>Picture:</label>
                    <input ref={contactPicture} type='text' id='contactPicture' className='form-control' placeholder='Place the url of the profile image'></input>
                </div>
                <div className='d-flex flex-column pb-4'>
                    <label>Email:</label>
                    <input ref={contactEmail} type='email' id='contactEmail' className='form-control' placeholder='Contact email' required></input>
                </div>
                <div className='d-flex flex-column pb-4'>
                    <label>Gender:</label>
                    <select ref={contactGender} id='contactGender' className='form-control'>

                        <option value='male'>
                            Male
                        </option>
                        <option value='female'>
                            Female
                        </option>
                    </select>
                </div>
                <button type='submit' className='btn btn-success btn-sm d-block'>Add Contact</button>
            </form>
        </div>
    );
}

ContactForm.propTypes ={
    add: PropTypes.func.isRequired
}

export default ContactForm;
