import {createContext} from 'react';

export const GlobalContext = createContext({
    tasks: [
        {
            id: 1,
            title: "Title one",
            descripcion: "Some descripcion",
            done: false,
        },
        {
            id: 2,
            title: "Title Two",
            descripcion: "Some descripcion",
            done: false,
        }
    ]
})