import axios from "axios";
import { ERROR_LOGIN, LOADING_LOGIN, SUCCESS_LOGIN } from "./Signin.Type";
import { useNavigate } from "react-router-dom";


export const LoginAction = (creds, navigate) => (dispatch) => {
    // const navigate = useNavigate();
    // const { token } = useSelector(store => store.Signin)

    const company = [{}]
    dispatch({ type: LOADING_LOGIN })

    

        axios.post(`https://taxservicebackend.onrender.com/signin`, creds).then(res => {

            dispatch({ type: SUCCESS_LOGIN, payload: res });
            // console.log("sign", res);
            if (res.status === 200) {
                alert("Login successful");
            }
            const token=res.token
            const freeHandle = () => {
                if (!token) {
                    navigate("/Login")
                }
                else if (token && company.length > 0) {
                    navigate("/HomeDash")

                } else {
                    navigate("/AddCompanyForm")
                }

            }
            // navigate("/HomeDash");
        })
    
    .catch (err=> {
        dispatch({ type: ERROR_LOGIN, payload: err });
        console.log("error : ", err.response.data.message)
        alert(err.response.data.message);
        console.log(err);
    })
}

