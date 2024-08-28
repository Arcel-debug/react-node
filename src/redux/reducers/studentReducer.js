import { createReducer } from "@reduxjs/toolkit";
import {
    getStudentsAction,
    getStudentAction,
    createStudentAction,
    deleteStudentAction,
    updateStudentAction,
    resetCRUDAction,
} from "../actions/studentAction";
const initialState = {
    students: undefined,
    loadingStudents: false,
    student: undefined,
    loadingStudent: false,
    resCreateStudent: undefined,
    loadingCreateStudent: false,
    resUpdateStudent: undefined,
    loadingUpdateStudent: false,
    resDeleteStudent: undefined,
    loadingDeleteStudent: false
};

const studentReducers = createReducer(initialState, (builder) => {
    builder
        .addCase(getStudentsAction.fulfilled, (state, actions) => {
            return {
                ...state,
                students: actions?.payload?.data,
                loadingStudents: false
            }
        }).addCase(getStudentsAction.pending, (state, actions) => {
            return {
                ...state,
                loadingStudents: true
            }
        }).addCase(getStudentsAction.rejected, (state, actions) => {
            return {
                ...state,
                students: actions?.payload?.data,
                loadingStudents: false
            }
        });

    builder
        .addCase(getStudentAction.fulfilled, (state, actions) => {
            return {
                ...state,
                student: actions?.payload?.data,
                loadingStudent: false
            }
        }).addCase(getStudentAction.pending, (state, actions) => {
            return {
                ...state,
                loadingStudent: true
            }
        }).addCase(getStudentAction.rejected, (state, actions) => {
            return {
                ...state,
                student: actions?.payload?.data,
                loadingStudent: false
            }
        });

    builder
        .addCase(createStudentAction.fulfilled, (state, actions) => {
            return {
                ...state,
                loadingCreateStudent: false,
                resCreateStudent: actions?.payload
            }
        }).addCase(createStudentAction.pending, (state, actions) => {
            return {
                ...state,
                loadingCreateStudent: true
            }
        }).addCase(createStudentAction.rejected, (state, actions) => {
            return {
                ...state,
                loadingCreateStudent: false,
                resCreateStudent: actions?.payload
            }
        });

    builder
        .addCase(updateStudentAction.fulfilled, (state, actions) => {
            return {
                ...state,
                loadingUpdateStudent: false,
                resUpdateStudent: actions?.payload
        }
        }).addCase(updateStudentAction.pending, (state, actions) => {
            return {
                ...state,
                loadingUpdateStudent: true
            }
        }).addCase(updateStudentAction.rejected, (state, actions) => {
            return {
                ...state,
                loadingUpdateStudent: false,
                resUpdateStudent: actions?.payload
            }
        });

    builder
        .addCase(deleteStudentAction.fulfilled, (state, actions) => {
            return {
                ...state,
                resDeleteStudent: actions.payload,
                loadingDeleteStudent: false
            }
        }).addCase(deleteStudentAction.pending, (state, actions) => {
            return {
                ...state,
                loadingDeleteStudent: true
            }
        }).addCase(deleteStudentAction.rejected, (state, actions) => {
            return {
                ...state,
                resDeleteStudent: actions.payload,
                loadingDeleteStudent: false
            }
        });


    builder.addCase(resetCRUDAction, (state) => {
        return {
            ...state,
            resCreateStudent: undefined,
            resUpdateStudent: undefined,
            resDeleteStudent: undefined
        };
    });
});

export default studentReducers;
