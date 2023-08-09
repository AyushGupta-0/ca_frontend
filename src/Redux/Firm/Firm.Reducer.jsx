import { ERROR_FIRM_REGISTER, LOADING_FIRM_REGISTER, SUCCESS_FIRM_REGISTER } from "./Firm.Type";


const initialState = {
    loading: false,
    Firm_registerData: [],
    error: false,


}

export const Firm_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOADING_FIRM_REGISTER: {
            return { ...state, loading: true, error: false };
        }
        case SUCCESS_FIRM_REGISTER: {
            return { ...state, error: false, loading: false, Firm_registerData: payload };
        }
        case ERROR_FIRM_REGISTER: {
            return { ...state, error: true, loading: false }
        }
   

        default: {
            return state;
        }
    }

}