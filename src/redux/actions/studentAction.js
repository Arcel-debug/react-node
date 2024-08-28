import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { studentApis } from "../../services/student-apis";

const studentActions = {
    getStudents: createAction("GET_STUDENTS"),
    getStudent: createAction("GET_STUDENT"),
    createStudent: createAction("CREATE_STUDENT"),
    updateStudent: createAction("UPDATE_STUDENT"),
    deleteStudent: createAction("DELETE_STUDENT"),
    resetCRUD: createAction("RESET_CRUD")
};

export const getStudentsAction = createAsyncThunk(
    studentActions.getStudents,
    async (payload) => {
        const res = await studentApis
          .students(payload)
          .then((data) => data)
          .catch((errors) => JSON.parse(errors.response.request.response));
        return res;
    }
);


export const getStudentAction = createAsyncThunk(
    studentActions.getStudent,
    async (payload) => {
        const res = await studentApis
            .student(payload)
            .then((data) => data)
            .catch((errors) => JSON.parse(errors.response.request.response));
        return res;
    }
);

export const createStudentAction = createAsyncThunk(
    studentActions.createStudent,
    async (payload) => {
        const res = await studentApis
            .createStudent(payload)
            .then((data) => data)
            .catch((errors) => JSON.parse(errors.response.request.response));
        return res;
    }
);
export const updateStudentAction = createAsyncThunk(
    studentActions.updateStudent,
    async (payload) => {
        const res = await studentApis
            .updateStudent(payload)
            .then((data) => data)
            .catch((errors) => JSON.parse(errors.response.request.response));
        return res;
    }
);
export const deleteStudentAction = createAsyncThunk(
    studentActions.deleteStudent,
    async (payload) => {
        const res = await studentApis
            .deleteStudent(payload)
            .then((data) => data)
            .catch((errors) => JSON.parse(errors.response.request.response));
        return res;
    }
);

export const resetCRUDAction = studentActions.resetCRUD;

export default studentActions;
