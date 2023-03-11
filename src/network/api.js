import { axiosInstance } from "./axiosInstance";

export const api = {
  getAll: async (url) => {
    let token = localStorage.getItem("token");
    let response = [];
    await axiosInstance
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        if (err.response?.status == 401) {
          localStorage.removeItem("user");
          window.location.href = "/";
        }
        throw err;
      });
    return response;
  },
  add: async (url, data) => {
    let token = localStorage.getItem("token");

    let response = {};
    await axiosInstance
      .post(url, data, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        console.log("Err", err);
        throw err;
      });

    return response;
  },
  remove: async (url, id) => {
    let token = localStorage.getItem("token");

    let response = {};
    console.log(url + "/" + id);
    await axiosInstance
      .delete(url + "/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        console.log("Err", err);
        throw err;
      });

    return response;
  },
  addPhoto: async (url, data) => {
    let token = localStorage.getItem("token");
    let response = {};
    await axiosInstance
      .post(url, data, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        throw err;
      });
    return response;
  },
};
