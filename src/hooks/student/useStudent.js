import { useDispatch, useSelector } from "react-redux";
import { getStudentAction } from "../../redux/actions/studentAction";

const useStudent = () => {
  const { student, loadingStudent } = useSelector((state) => state.studentState);
  const dispatch = useDispatch();

  const getStudent = (payload) => {
    dispatch(getStudentAction(payload));
  };

  return {
    student,
    getStudent,
    loadingStudent
  };
};

export default useStudent;
