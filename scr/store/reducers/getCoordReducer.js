import { GET_DATA } from "../constants/action_type"

const initialState = {
    coord: 'aa'
}

const getCoordReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, coord: action.payload}
        default: 
            return state
    }
}

export default getCoordReducer