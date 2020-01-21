import axios from 'axios';

export const GET_USER = "GET_USER";
export const GET_USER_LOADING = "GET_USER_LOADING";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_DATA= "GET_USER_DATA";
export const GET_USER_DATA_LOADING= "GET_USER_DATA_LOADING";
export const GET_USER_DATA_ERROR= "GET_USER_DATA_ERROR";

export const getUserAsync = (user) => {
  return (dispatch, getState) => {
   
    dispatch(getUserLoading(true)); 

    setTimeout(() => {
      dispatch(getUser(user));
      dispatch(getUserLoading(false));
    }, 900) 
    
  };
};

export const getUserDataAsync = (uid) => {
  return (dispatch, getState) => {
   
    dispatch(getUserDataLoading(true));
    
    axios
    .get('https://pickletour.appspot.com/api/user/get/'+uid)
    .then((userData) => { 
      dispatch(getUserData(userData));
      dispatch(getUserDataLoading(false))
    }).catch((error) => { 
      dispatch(getUserDataLoading(false))
      dispatch(getUserDataError(error));
      console.log("mongodb get userData error")
    })
  };
};

export const getUser = (payload) => {
  return {
    type: GET_USER,
    payload
  };
};

export const getUserData = (payload) => {
  return {
    type: GET_USER_DATA,
    payload
  };
};

export const getUserLoading = (payload) => {
  return {
    type: GET_USER_LOADING,
    payload
  };
};

export const getUserDataLoading = (payload) => {
  return {
    type: GET_USER_DATA_LOADING,
    payload
  };
};

export const getUserDataError = (payload) => {
  return {
    type: GET_USER_DATA_ERROR,
    payload
  };
};
