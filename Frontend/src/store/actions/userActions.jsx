import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/UserSlice";
export const asyncCurrentUser = (user) => async (dispatch, getState) => {
  try {


   const user =  JSON.parse(localStorage.getItem("user"))
   if(user){
       dispatch(loaduser(user))
       console.log("Current user loaded from localStorage:", user);
   }
      else{
        console.log("No user found in localStorage");
      }
  } catch (err) {
    console.error(err);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/user?email=${user.email}&password=${user.password}`
    );

    console.log("User logged in successfully:", data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (err) {
    console.error(err);
  }
};
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {

   
    localStorage.removeItem("user");
  } catch (err) {
    console.error(err);
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post("/user", user);
    console.log("User registered successfully:", response.data);
  } catch (err) {
    console.error("Error in asyncRegisterUser:", err);
    dispatch({
      type: "REGISTER_USER_ERROR",
      payload: err.message,
    });
  }
};
