


const userModel = {
    email :'',
    password : ''
};


const initialState = [];

const registerReducer = function(state,action) {
    state = state || initialState;

    switch (action.type) {
        case 'RegisterUser': {
            const user = {...userModel, email: action.payload.email, password:action.payload.password}
            console.log(state)
            return [ ...state, user ];
        }
            
            // return state.concat(todo);
        // }
        // case DELETE_TODO:
        //     const todos = state.filter( todo => todo.id !== action.payload)
        //     return todos;

        // case UPDATE_TODO:
        //     console.log(state)
        //     let newState = state
        //     console.log(action.payload)
        //     for ( let i of newState){
        //         console.log(i)
        //         if(i.id === action.payload.id) {
        //             console.log(action.payload.id)
        //               i.title = action.payload.newToDo                   
        //         }
        //     }
            
        //     return newState
        default:
            return state;
    }
}

export default registerReducer