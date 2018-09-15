import uuid from 'uuid';

export const addUser =
    ({id = '', firstName = '', lastName = '', email = '', password = '' ,password2  ='' , role='user'} = {}) =>
    ({
        type: 'ADD_USER',
        user: {
            id: uuid(),
            firstName,
            lastName,
            email,
            password,
            password2,
            role : 'user'
        }
    });
export const removeUser =
    ({ id } = {}) =>
    ({
        type: 'REMOVE_USER',
        user: { id }
    });

export const editUser =
    (id, updates) =>
    ({
        type: 'EDIT_USER',
        id,
        updates
    });
export const editUsers =
    (updates) =>
    ({
        type: 'EDIT_USERS',
        updates
    });

export const validateUser =
    (userCredintials) =>
    ({
        type: 'VALIDATE_USER',
        userCredintials
    });
export const changeRole = 
    (user)=>{
        console.log(' at action : ', user.email , user.driver ,user.admin )
        return{
        type:'CHANGE_ROLE',
        email:user.email ,
        driver:user.driver,
        admin:user.admin 
    }};