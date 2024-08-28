import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAction,
  resetCRUDAction,
} from "../../redux/actions/studentAction";
import useStudents from "./useStudents";

const useDeleteStudent = () => {

  const { resDeleteStudent } = useSelector((state) => state.studentState);

  const { getStudents } = useStudents();
  const dispatch = useDispatch();

  const deleteStudent = (id) => {
    dispatch(deleteStudentAction(id));
    dispatch(resetCRUDAction());
  };

  React.useEffect(() => {
    if (resDeleteStudent) {
      getStudents();
      console.log("Success");
    }
  }, [resDeleteStudent]);

  return {
    deleteStudent,
    resDeleteStudent,
  };
};

export default useDeleteStudent;
