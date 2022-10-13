import React from 'react';
import ContactComponent from '../pure/contact_component';
import { Contact } from '../../models/contact.class';


const ContactListComponent = () => {

    const defaultContact = new Contact('Ezequiel', 'Romero', 'eze.1003@gmail.com', false)

    return (
        <div>
            <h2>Contact list:</h2>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
