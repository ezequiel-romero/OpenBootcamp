import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    return (
        <div>
            <h3>{ contact.firstName } { contact.lastName }</h3>
            <p>{ contact.email }</p>
            <p>This contact is { contact.connected ? 'Online' : 'Offline' }</p>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
