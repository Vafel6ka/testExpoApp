import { GET_DATA } from "../constants/action_type";

export const get_data = (data) => ({
    type: GET_DATA,
    payload: data
})