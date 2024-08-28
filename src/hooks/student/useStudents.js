import { useDispatch, useSelector } from "react-redux";
import {
    getStudentsAction,
    resetCRUDAction,
} from "../../redux/actions/studentAction";

const useStudents = () => {
    const { students, loadingStudents } = useSelector(
        (state) => state.studentState
    );
    const dispatch = useDispatch();

    const getStudents = (value) => {
        dispatch(getStudentsAction(value));
        dispatch(resetCRUDAction());
    };

    return {
        students,
        getStudents,
        loadingStudents
    };
};

export default useStudents;
