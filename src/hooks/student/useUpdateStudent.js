import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import { updateStudentAction, resetCRUDAction } from "../../redux/actions/studentAction.js";

const useUpdateStudent = () => {
  const navigate = useNavigate();
  const { resUpdateStudent, loadingUpdateStudent } = useSelector((state) => state.studentState);
  const dispatch = useDispatch();

  const updateStudent = (payload) => {
    dispatch(updateStudentAction(payload));
  };

  React.useEffect(() => {
    if (resUpdateStudent?.error_code === "NO_ERROR") {
      navigate(`/student-list`);
    }
    dispatch(resetCRUDAction());
  }, [resUpdateStudent]);

  return {
    updateStudent,
    resUpdateStudent,
    loadingUpdateStudent
  };
};

export default useUpdateStudent;
