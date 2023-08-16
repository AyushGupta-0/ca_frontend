import axios from "axios";
import {
    DELETE_PARTIES,
  ERROR_PARTIES,
  GET_PARTIES,
  LOADING_PARTIES,
  SUCCESS_PARTIES,
  UPDATE_PARTIES,
} from "./parties.types";



export const postPartiesAction = (creds,token) => (dispatch) => {
    const headers={
        "token":`${token}`
    }
  dispatch({ type: LOADING_PARTIES });
  try {
    const url=`https://taxservicebackend.onrender.com/firmId/party`
    axios.post(url, creds, { headers }).then((res) => {
      dispatch({ type: SUCCESS_PARTIES, payload: res.data });
      console.log(res);
      if (res.status === 201) {
        alert(res.data.message);
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_PARTIES, payload: error });
  }
};


export const getPartiesAction = (token) => (dispatch) => {
    const headers={
        "token":`${token}`
    }
    dispatch({ type: LOADING_PARTIES });
    try {
      const url=`https://taxservicebackend.onrender.com/party`
      axios.get(url,{ headers }).then((res) => {
        dispatch({ type: GET_PARTIES, payload: res.data });
        // console.log("abcd", res.data );
       
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PARTIES, payload: error });
    }
  };
  


  export const updatePartiesAction = (creds,token) => (dispatch) => {
    const headers={
        "token":`${token}`
    }
    dispatch({ type: LOADING_PARTIES });
    try {
      const url=`https://taxservicebackend.onrender.com/party/id`
      axios.put(url,creds,{ headers }).then((res) => {
        dispatch({ type: UPDATE_PARTIES, payload: res.data });
        console.log(res);
    
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_PARTIES, payload: error });
    }
  };
  

//   export const deletePartiesAction = (token) => (dispatch) => {
    // const headers={
    //     "token":`${token}`
    // }
//     dispatch({ type: LOADING_PARTIES });
//     try {
//       const url=`https://taxservicebackend.onrender.com/party/${id}`
//       axios.post(url,{ headers }).then((res) => {
//         dispatch({ type: DELETE_PARTIES, payload: res.data });
//         console.log(res)
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ERROR_PARTIES, payload: error });
//     }
//   };