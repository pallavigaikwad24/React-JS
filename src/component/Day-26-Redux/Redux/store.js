import {createStore} from 'redux';

const reducer = (state = 0, action)=>{
    switch (action.type) {
        case 'INCREMENT': 
                    return state > 20 ? window.alert("You have reached the limit") : state + 1 ;
        case 'DECREMENT' : return state < 0 ? window.alert("You can't reduce more") : state - 1;
        default: return state;
    }
}

export  const store = createStore(reducer)