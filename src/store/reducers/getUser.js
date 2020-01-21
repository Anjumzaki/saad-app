import { GET_USER, GET_USER_LOADING, GET_USER_ERROR, GET_USER_DATA, GET_USER_DATA_LOADING, GET_USER_DATA_ERROR} from "../actions";

const defaultState = {
  user: null,
  userData: null,
  loading: false,
  error: '',
  dataLoading: false,
  dataError: ''
};

export default (state = defaultState, action) => {
    switch (action.type) { 
      case GET_USER:
        return { 
            ...state,
            user: action.payload,
        }; 
        case GET_USER_DATA:
          return { 
              ...state,
              userData: action.payload,
          }; 
        case GET_USER_LOADING: 
          return {
              ...state,
              loading: action.payload
          };
          case GET_USER_DATA_LOADING: 
          return {
              ...state,
              dataLoading: action.payload
          };
        case GET_USER_ERROR: 
          return {
              ...state,
              error: action.payload,
          };
          case GET_USER_DATA_ERROR: 
          return {
              ...state,
              dataError: action.payload,
          };
      default:
        return state;
    }
};
