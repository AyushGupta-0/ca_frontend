import axios from "axios";
import { ERROR_Profile, LOADING_Profile, SUCCESS_Profile } from "./Profile.Type";


export const ProfileAction = (token) => (dispatch) => {
    const headers = {
        'token': `${token}`
    };
    dispatch({ type: LOADING_Profile })


    try {

        axios.get(`https://taxservicebackend.onrender.com/profile_get`, { headers }).then(res => {
            dispatch({ type: SUCCESS_Profile, payload: res.data.profile_data});
            // console.log("res", res.data.profile_data);
        })

    }
    catch (err) {
        dispatch({ type: ERROR_Profile, payload: err });

        console.log(err);
    }
}

export const ProfileActionUpdate = (token,id) => (dispatch) => {
    const headers = {
        'token': `${token}`
    };
    dispatch({ type: LOADING_Profile })

    console.log("acid", id);

    try {

        axios.patch(`https://taxservicebackend.onrender.com/profile_update/${id}`, { headers }).then(res => {
            // dispatch({ type: SUCCESS_Profile, payload: res.data.profile_data });
            console.log("resup", res);
        })

    }
    catch (err) {
        dispatch({ type: ERROR_Profile, payload: err });

        console.log(err);
    }
}