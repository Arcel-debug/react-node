import axiosClient from "../api-caller.js";

export const studentApis = {
  students: async (data) => {
    const url = "students";
    return await axiosClient.get(url, { params: data });
  },
  student: async (id) => {
    const url = "students";
    return await axiosClient.get(`${url}/${id}`);
  },
  createStudent: async (data) => {
    const url = "students/create";
    return await axiosClient.post(url, data);
  },
  updateStudent: async (data) => {
    const url = "students/update";
    return await axiosClient.put(`${url}/${data.id}`, data);
  },
  deleteStudent: async (id) => {
    const url = "students/delete";
    return await axiosClient.delete(`${url}/${id}`);
  },
};
