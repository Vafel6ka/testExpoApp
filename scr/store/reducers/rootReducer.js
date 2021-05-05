import getCoordReducer from "./getCoordReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    data: getCoordReducer
});

export default rootReducer
