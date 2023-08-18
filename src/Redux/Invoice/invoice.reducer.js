import {
    DELETE_INVOICE,
    ERROR_INVOICE,
    GET_INVOICE,
    LOADING_INVOICE,
    SUCCESS_INVOICE,
    UPDATE_INVOICE,
  } from "./invoice.type";
  
  const initialState = {
    loading: false,
    error: false,
    invoiceData: [],
  };
  export const invoiceReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_INVOICE: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_INVOICE: {
        return { ...state, loading: false, error: false, invoiceData: payload };
      }
      case GET_INVOICE: {
        return { ...state, loading: false, error: false, invoiceData: payload };
      }
      case UPDATE_INVOICE: {
        return { ...state, loading: false, error: false, invoiceData: payload };
      }
      case DELETE_INVOICE: {
        return { ...state, loading: false, error: false, invoiceData: payload };
      }
      case ERROR_INVOICE: {
        return { ...state, loading: false, error: true, invoiceData: payload};
      }
      default: {
        return state;
      }
    }
  };
  