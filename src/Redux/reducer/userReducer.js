import { localUserServ } from "../../service/localService";
import { SET_USER_LOGIN, SET_USER_REGISTER } from "../Contant/userContant";

const initialState = {
  userInfo: localUserServ.get(),
  userRegister: localUserServ.getRegister(),
};
let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN: {
      return { ...state, userInfo: payload };
    }
    case SET_USER_REGISTER: {
      return { ...state, userRegister: payload };
    }
    default:
      return state;
  }
};
export default userReducer;
