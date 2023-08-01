import axios from "axios";
import { ERROR_REGISTER, LOADING_REGISTER, SUCCESS_REGISTER } from "./Auth.Type"

export const AuthRegisterAction = (creds) => (dispatch) => {

    dispatch({ type: LOADING_REGISTER })

    try {

        axios.post(`https://taxservicebackend.onrender.com/signup`, creds).then(res => {
            dispatch({ type: SUCCESS_REGISTER, payload: creds });
            console.log(res);
        })
    }
    catch (err) {
        dispatch({ type: ERROR_REGISTER, payload: err });

        console.log(err);
    }
}

