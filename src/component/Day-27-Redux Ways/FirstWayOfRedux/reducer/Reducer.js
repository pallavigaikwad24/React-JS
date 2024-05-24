const initialization = 0;

// Creating reducer 
const counterChange = (state = initialization, action)=>{
    switch (action.type) {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
    
        default:
            return state;
    }
}

export default counterChange;