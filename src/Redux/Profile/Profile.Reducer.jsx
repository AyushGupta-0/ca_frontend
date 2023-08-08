import { ERROR_Profile, LOADING_Profile, SUCCESS_Profile } from "./Profile.Type";


const initialState = {
    loading: false,
    profileData: [],
    error: false,


}

export const Profile_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOADING_Profile: {
            return { ...state, loading: true, error: false };
        }
        case SUCCESS_Profile: {
            return { ...state, error: false, loading: false, profileData: payload };
        }
        case ERROR_Profile: {
            return { ...state, error: true, loading: false }
        }

        default: {
            return state;
        }
    }

}