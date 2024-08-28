import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  createStudentAction,
  resetCRUDAction,
} from "../../redux/actions/studentAction";
import { useNavigate } from "react-router-dom";

const useCreateStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { resCreateStudent, student, loadingCreateStudent } = useSelector((state) => state.studentState);

  const createStudent = (data) => {
    dispatch(createStudentAction(data));
  };

  React.useEffect(() => {
    if (resCreateStudent) {
      console.log("Success");
      navigate(`/student-list`);
      dispatch(resetCRUDAction());
    }
  }, [loadingCreateStudent]);

  return {
    createStudent,
    resCreateStudent,
    student,
    loadingCreateStudent
  };
};

export default useCreateStudent;
