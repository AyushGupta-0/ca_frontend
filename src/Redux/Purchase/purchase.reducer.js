import {
    LOADING_PURCHASE,
    SUCCESS_PURCHASE,
    ERROR_PURCHASE,
    GET_PURCHASE,
    UPDATE_PURCHASE,
    DELETE_PURCHASE,
  } from "./purchase.types";
  
  const initialState = {
    loading: false,
    error: false,
    purchaseData: [],
    getPurchaseData:[],
  }
  export const purchaseReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_PURCHASE: {
        return { ...state, loading: true, error: false };
      }
      case SUCCESS_PURCHASE: {
        return { ...state, loading: false, error: false, partiesData: payload };
      }
      case ERROR_PURCHASE: {
        return { ...state, loading: false, error: false, getPartiesData: payload };
      }
      case UPDATE_PURCHASE: {
        return { ...state, loading: false, error: false, partiesData: payload };
      }
      case DELETE_PURCHASE: {
        return { ...state, loading: false, error: false , partiesData: payload };
      }
      default: {
        return state;
      }
    }
  };
  