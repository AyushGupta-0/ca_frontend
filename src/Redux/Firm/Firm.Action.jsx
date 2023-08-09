// Firm.Action.js
import axios from "axios";
import { ERROR_FIRM_REGISTER, LOADING_FIRM_REGISTER, SUCCESS_FIRM_REGISTER } from "./Firm.Type";

export const firmRegisterAction = (formData, token) => (dispatch) => {
    console.log(formData, "token", token);
    const headers = {
        'Content-Type': 'application/json',
        'token': `${token}`
    };

    dispatch({ type: LOADING_FIRM_REGISTER });

    axios.post(`https://taxservicebackend.onrender.com/firm_registration`, formData, { headers })
        .then(res => {
            dispatch({ type: SUCCESS_FIRM_REGISTER, payload: res.data });
            console.log(res);
            if (res.status === 201) {
                alert("Successfully registered") 
            }
        })
        .catch(err => {
            dispatch({ type: ERROR_FIRM_REGISTER, payload: err });
            console.log(err);
        });
};
