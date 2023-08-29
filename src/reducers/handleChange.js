import { LOADHABITS} from '../actions'
const initialState = {
    habitsList: [],
}
const handleChange = (state = initialState, action) => {
    switch(action.type){
        case LOADHABITS : return {...state, habitsList: action.payload};
        default : return state;
    }
}

export default handleChange;