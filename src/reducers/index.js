
import {SET_DATA, SET_COLOR, SET_DIFF} from "../actions";

function reducer(state, action) {
    switch(action.type){
        case SET_DATA:
            return{
                ...state,
                doneLoading: true

            }
        case SET_COLOR:
            return{
                ...state,
                color: [1,2,3].map(x=>Math.random()*256|0)
            }
        case SET_DIFF:
            return{
                ...state,
                diff: action.payload.diff
            }
        default:
            return state;
    } 
}

export default reducer;