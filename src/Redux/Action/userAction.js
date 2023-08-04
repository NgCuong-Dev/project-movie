import { SET_USER_LOGIN } from "../../Redux/Contant/userContant";
import { userServ } from "../../service/userService";
import { localUserServ } from "../../service/localService";
// export const setLoginAction = (values) => {
//   return {
//     type: SET_USER_LOGIN,
//     payload: values,
//   };
// };

export const setLoginActionServ = (values, onSuccess) => {
  return (dispatch) => {
    userServ
      .login(values, onSuccess)
      .then((res) => {
        dispatch({
          type: SET_USER_LOGIN,
          payload: res.data.content,
        });
        //save data into localstorage
        localUserServ.set(res.data.content);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
