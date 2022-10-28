export class Contact {
    name = '';
    gender = '';
    email = '';
    connected = false;
    picture = '';

    constructor(name, gender, email, connected, picture) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.connected = connected;
        this.picture = picture;
    }
}