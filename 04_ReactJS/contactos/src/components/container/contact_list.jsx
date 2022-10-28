import React, { useState } from 'react';
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactList = () => {

    const defaultContact1 = new Contact('Conny Kröger', 'female', 'conny.kroger@example.com', false, 'https://randomuser.me/api/portraits/med/women/33.jpg')
    const defaultContact2 = new Contact('Matias Forland', 'male', 'matias.forland@example.com', true, 'https://randomuser.me/api/portraits/med/men/86.jpg')
    const defaultContact3 = new Contact('Minnie Burton', 'female', 'minnie.burton@example.com', true, 'https://randomuser.me/api/portraits/med/women/17.jpg')
    const defaultContact4 = new Contact('Santana Oliveira', 'male', 'santana.oliveira@example.com', false, 'https://randomuser.me/api/portraits/med/men/80.jpg')

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3, defaultContact4]);

    function toggleStatus(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].connected = !tempContact[index].connected
        setContacts(tempContact)
    }

    function deleteContact(contact) {
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index, 1)
        setContacts(tempContact)
    }

    function addContact(contact) {
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }

    return (
        <div>
            <div className='p-3 text-center bg-light border border-bottom-0 rounded-top'>
                <h5>Contacts</h5>
            </div>
            <table className='table border text-center'>
                <thead>
                    <tr>
                        <th scope='col'>Picture</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Gender</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {   contacts.map((contact, index) => {
                    return (
                        <ContactComponent
                            key={index}
                            contact={contact}
                            toggleStatus={toggleStatus}
                            deleteContact={deleteContact}>
                        </ContactComponent>
                    )
                })}
                </tbody>
            </table>
            <ContactForm
                add={addContact}>
            </ContactForm>
        </div>
    );
}

export default ContactList;
