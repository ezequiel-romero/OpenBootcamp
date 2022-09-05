import { IContacto } from "../models/contacto.interface";

//Exportamos una lista simulada de contactos
export const CONTACTOS: IContacto[] = [
    {
        id: 0,
        nombre: 'Martín',
        apellido: 'Rodriguez',
        email: 'martin@rodriguez.com',
        edad: 34
    },
    {
        id: 1,
        nombre: 'Lucas',
        apellido: 'Pereyra',
        email: 'lucas@pereyra.com',
        edad: 23
    },
    {
        id: 2,
        nombre: 'Juan',
        apellido: 'Gomez',
        email: 'juan@gomez.com',
        edad: 42
    },
    {
        id: 3,
        nombre: 'Claudia',
        apellido: 'Martinez',
        email: 'claudia@martinez.com',
        edad: 30
    }
]