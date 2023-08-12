import {
  DELETE_PARTIES,
  ERROR_PARTIES,
  GET_PARTIES,
  LOADING_PARTIES,
  SUCCESS_PARTIES,
  UPDATE_PARTIES,
} from "./parties.types";

const initialState = {
  loading: false,
  error: false,
  partiesData: [],
};
export const partiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_PARTIES: {
      return { ...state, loading: true, error: false };
    }
    case SUCCESS_PARTIES: {
      return { ...state, loading: false, error: false, partiesData: payload };
    }
    case GET_PARTIES: {
      return { ...state, loading: false, error: false, partiesData: payload };
    }
    case UPDATE_PARTIES: {
      return { ...state, loading: false, error: false, partiesData: payload };
    }
    case DELETE_PARTIES: {
      return { ...state, loading: false, error: false, partiesData: payload };
    }
    case ERROR_PARTIES: {
      return { ...state, loading: false, error: true, partiesData: payload};
    }
    default: {
      return state;
    }
  }
};
