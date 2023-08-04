import axios from "axios";
import { BASE_URL, configHeader } from "../service/config";

export const userServ = {
  login: (values) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: values,
      headers: configHeader(),
    });
  },
  register: (values) => {
    console.log(values);
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: values,
      headers: configHeader(),
    });
  },
};
