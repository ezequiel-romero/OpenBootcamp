import React from 'react';
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class';

const ContactComponent = ({contact, toggleStatus, deleteContact}) => {


    function contactToggle(){
        if (contact.connected) {
            return( <i onClick={() => toggleStatus(contact)} className="bi bi-toggle-on" style={{color : 'green'}}></i>)
        } else {
            return(<i onClick={() => toggleStatus(contact)} className="bi bi-toggle-off" style={{color : 'tomato'}}></i>)
        }
    }

    return (
        <tr>
            <th>
                <img src={ contact.picture } style={{borderRadius : '100px', width : '50px'}} alt='' />
            </th>
            <th scope='row' className='align-middle px-3'>
                <span>{ contact.name }</span>
            </th>
            <td className='align-middle px-3'>
                <span>{ contact.email }</span>
            </td>
            <td className='align-middle px-3'>
                <span>{ contact.gender }</span>
            </td>
            <td className='align-middle px-3'>
                { contactToggle() }
                <i onClick={() => deleteContact(contact)} className="bi bi-trash ps-2" style={{color : 'tomato'}}></i>
            </td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    toggleStatus: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactComponent;
