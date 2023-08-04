export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const localUserServ = {
  //login
  get: () => {
    let dataJson = localStorage.getItem(USER_LOGIN);
    return JSON.parse(dataJson);
  },
  set: (userInfo) => {
    let dataJson = JSON.stringify(userInfo);
    localStorage.setItem(USER_LOGIN, dataJson);
  },
  remove: () => {
    localStorage.removeItem(USER_LOGIN);
  },
  //register
  getRegister: () => {
    let dataJson1 = localStorage.getItem(USER_REGISTER);
    return JSON.parse(dataJson1);
  },
  setRegister: (userRegister) => {
    let dataJsonRegister = JSON.stringify(userRegister);
    localStorage.setItem(USER_REGISTER, dataJsonRegister);
  },
};
