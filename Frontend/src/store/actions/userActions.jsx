import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/UserSlice";
import {toast} from "react-toastify";
import {asyncLoadProducts} from "./productActions.jsx";
export const asyncCurrentUser = (user) => async (dispatch, getState) => {
  try {

   const user =  JSON.parse(localStorage.getItem("user"))
   if(user){
       dispatch(loaduser(user))
      //  console.log("Current user loaded from localStorage:", user);
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
    dispatch(loaduser(data[0]));
    console.log("User logged in successfully:", data[0]);
      toast.success("User loged in")
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (err) {
    console.error(err);
  }
};
export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {

   dispatch(loaduser(null));
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
export const asyncUpdateUser = (user,id) => async (dispatch, getState) => {
    try {
        const response = await axios.patch("/user/"+id, user);
        // console.log("User updated successfully:", response.data);
        toast.success("User updated successfully")
        dispatch(loaduser(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));

        return response.data; // Optional: useful if the caller needs it
    } catch (err) {
        console.error("Error in asyncUpdateUser:", err);
        // Optionally, dispatch an error action or show a toast
    }
};

export const asyncDeleteUser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/user/"+id)
        dispatch(loaduser(null))
        localStorage.removeItem("user");
        toast.error("User Deleted")
    }

    catch (err) {
        console.error(err);
    }
}

