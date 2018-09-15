const usersDefaultState = [ {
        firstName    : 'default',
        lastName     : 'usertest', 
        password     : '123456',
        email        : 'default@user.com',
        validate     : false ,
        role : 'user'
      }  ];


export default (state = usersDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user];


        case 'REMOVE_USER':
            return state.filter((user) => {
                return user.id !== action.user.id; // this is the only condition that will not return a value 
            });
            
        case 'EDIT_USER':
            return state.map((user) => {
                if (user.id === action.id) {
                    // using spread operator with objects >> { ...Obj , newKey or override existing key} returns the same object with overrided values or new values 
                    return {...user,
                        ...action.updates
                    }

                } else {
                    return user
                }
            })
            case 'EDIT_USERS':
            return action.updates
                    


            case 'VALIDATE_USER':{
                console.log('state : ', state)
                return state.map((user) => {
                
                    if (user.email === action.userCredintials.email) {
                        // using spread operator with objects >> { ...Obj , newKey or override existing key} returns the same object with overrided values or new values 
                        console.log('i am inside credentials : ',action.userCredintials);
                        return { ...user,validate :true,auth : action.userCredintials.UserAuth}
    
                    } else {
                        console.log(' i should reach here ! ', action.userCredintials);
                        return { ...user,validate :false,auth:undefined}
                    }
                })
    
            }

            case 'LOGOUT_USER':{
                console.log('state : ', state)
                return state.map((user) => {
                
                    if (user.email === action.userCredintials.email && user.password === action.userCredintials.password) {
                        // using spread operator with objects >> { ...Obj , newKey or override existing key} returns the same object with overrided values or new values 
                        console.log('i am inside');
                        return { ...user,validate :false}
    
                    } else {
                        return user ;
                    }
                })
    
            }

            case 'CHANGE_ROLE':{
                console.log(' at reducer : ', action)
                var theRole;
                if(action.admin === true){
                    console.log(' admin is true  : ', action.admin)
                    theRole = 'admin' ;
                    console.log(' the role is   : ', theRole)
                }else if (action.driver === true){
                    console.log(' driver is true  : ', action.driver)
                    theRole = 'driver' ;
                    console.log(' the role is   : ', theRole)
                }else {
                    console.log(' driver is true  : ', action.driver)
                    theRole = 'user' ;
                    console.log(' the role is   : ', theRole)
                }
                return state.map((user)=>{
                   
                   if(user.email === action.email){
                    console.log('at reducer : ', user);
                    return {...user,role : theRole}
                   }else {
                    return user;
                   }
                   
                })
            }
            
        default:
            return state;
    }

};