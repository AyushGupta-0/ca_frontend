import axios from "axios";
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from "./Signin.Type";


export const LoginAction = (creds) => (dispatch) => {

    dispatch({ type: LOADING_LOGIN })



    axios.post(`https://taxservicebackend.onrender.com/signin`, creds).then(res => {

        dispatch({ type: SUCCESS_LOGIN, payload: res });
        // console.log(company.length, res.data.token);
        


    })

        .catch(err => {
            dispatch({ type: ERROR_LOGIN, payload: err });
            console.log("error : ", err.response.data.message)
            alert(err.response.data.message);
            console.log(err);
        })
}

