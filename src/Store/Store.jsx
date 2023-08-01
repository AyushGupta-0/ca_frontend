import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { Auth_Reducer } from "../Redux/Auth/Auth.Reducer";
import { Signin_Reducer } from "../Redux/Singin/Signin.Reducer";

const rootReducer = combineReducers({

    Auth: Auth_Reducer,
    Signin: Signin_Reducer

})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
