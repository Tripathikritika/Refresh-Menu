import {loadData, saveData } from "../Cart/localStorage";
import { REQUEST, ERROR, SEND,LOGOUT } from "./actionTypes";

const initState = {
  token: "",
  isAuth: loadData('isAuth') || false,
  isLoading: false,
  isError: false,
  errorMsg: "",
  userName :loadData('userName') || "",
  userEmail : loadData('userEmail') ||"",
  userAvatar :loadData('userAvatar') || ""
};

const reducer = (state = initState, { type, payload }) => {
  // console.log("signup");
  switch (type) {
    case REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        errorMsg: "",
        isError: false,
      };
    case SEND:
      saveData('isAuth' , true )
      saveData('userName' ,payload.profileObj.name  ) 
      saveData('userEmail' ,payload.profileObj.email  ) 
      saveData('userAvatar' ,payload.profileObj.imageUrl) 
      return {
        ...state,
        token: payload.token || payload.accessToken,
        isAuth: true,
        errorMsg: "",
        isLoading: false,
        userName : payload.profileObj.name ,
        userEmail : payload.profileObj.email || "",
        userAvatar : payload.profileObj.imageUrl || ""
      };
    case ERROR:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
        isError: true,
      };
    case LOGOUT : 
      saveData('isAuth',false)
      saveData('userName',"")
      saveData('userEmail',"")
      saveData('userAvatar',"")
      return {
        ...state ,
        isAuth : false,
        userName : "",
        userEmail : "",
        userAvatar : ""
      }
    default:
      return state;
  }
};
export default reducer;
