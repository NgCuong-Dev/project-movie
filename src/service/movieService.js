import axios from "axios";
import { BASE_URL, configHeader } from "../service/config";
import { https } from "../service/config";

export const movieServ = {
  getMovieList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07");
  },
  getMovieByTheater: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  getInfoFilms: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getBanneFilms: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getDetailsMovie: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
};
