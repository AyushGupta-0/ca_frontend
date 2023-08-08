import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Auth_Reducer } from "../Redux/Auth/Auth.Reducer";
import { Signin_Reducer } from "../Redux/Singin/Signin.Reducer";
import { Profile_Reducer } from "../Redux/Profile/Profile.Reducer";
import { Firm_Reducer } from "../Redux/Firm/Firm.Reducer";

const rootReducer = combineReducers({

    Auth: Auth_Reducer,
    Signin: Signin_Reducer,
    Profile: Profile_Reducer,
    FirmRegistation: Firm_Reducer,


})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
