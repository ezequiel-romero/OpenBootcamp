import React, {useState} from 'react';

// Login/Logout styles
const loginStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeigth: 'bold'
}

const logoutStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeigth: 'bold'
}

// Login/Logout buttons components
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

const OptionalRender = () => {

    const [access, setAccess] = useState(false)
    const [nMessages, setNMessages] = useState(0)

    // function updateAccess() {
    //     setAccess(!access)
    // }

    function loginAction() {
        setAccess(true)
    }

    function logoutAction() {
        setAccess(false)
    }


    let optionalButton

    // if(access) {
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Login</button>
    // }

    if(access) {
        optionalButton = <LogoutButton propStyle={logoutStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loginStyle} loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }

            {/* N Messages Unread */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You have { nMessages } new message</p> }
            { nMessages > 1 && <p>You have { nMessages } new messages</p> }
            { nMessages === 0 && <p>There's no new messages</p> } */}

            <br />
            <br />
            
            {/* Ternary Operator */}
            { access ?
                <div>
                    { nMessages > 0 ?
                        <p>You have { nMessages } new message{ nMessages > 1 ? 's' : null }</p> :
                        <p>There's no new messages</p>
                    }
                    <button onClick={addMessages}>Add new Message</button>
                </div> :
                null }
        </div>
    );
}

export default OptionalRender;
