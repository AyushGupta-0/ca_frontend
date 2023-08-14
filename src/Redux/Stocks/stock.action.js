import axios from "axios";
import {
    DELETE_STOCKS,
  ERROR_STOCKS,
  GET_STOCKS,
  LOADING_STOCKS,
  SUCCESS_STOCKS,
  UPDATE_STOCKS,
} from "./stock.types";



export const postStockAction = (creds,token) => (dispatch) => {
    const headers={
        "token":`${token}`
    }
  dispatch({ type: LOADING_STOCKS });
  try {
    const url=`https://taxservicebackend.onrender.com/firmId/items`
    axios.post(url, creds, { headers }).then((res) => {
      dispatch({ type: SUCCESS_STOCKS, payload: res.data });
      console.log(res);
      if (res.status === 201) {
        alert(res.data.message);
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_STOCKS, payload: error });
  }
};


export const getStockAction = (token) => (dispatch) => {
    const headers={
        "token":`${token}`
    }
    dispatch({ type: LOADING_STOCKS });
    try {
      const url=`https://taxservicebackend.onrender.com/firmId/items`
      axios.get(url,{ headers }).then((res) => {
        dispatch({ type: GET_STOCKS, payload: res.data });
        console.log("abcd stock", res.data );
       
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_STOCKS, payload: error });
    }
  };
  


  export const updateStockAction = (creds,token) => (dispatch) => {
    const headers={
        "token":`${token}`
    }
    dispatch({ type: LOADING_STOCKS });
    try {
      const url=`https://taxservicebackend.onrender.com/items/id`
      axios.put(url,creds,{ headers }).then((res) => {
        dispatch({ type: UPDATE_STOCKS, payload: res.data });
        console.log(res);
    
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR_STOCKS, payload: error });
    }
  };
  

//   export const deleteStockAction = (token) => (dispatch) => {
    // const headers={
    //     "token":`${token}`
    // }
//     dispatch({ type: LOADING_STOCKS });
//     try {
//       const url=`https://taxservicebackend.onrender.com/items/${id}`
//       axios.post(url,{ headers }).then((res) => {
//         dispatch({ type: DELETE_STOCKS, payload: res.data });
//         console.log(res)
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: ERROR_STOCKS, payload: error });
//     }
//   };