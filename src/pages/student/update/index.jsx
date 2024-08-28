import React from "react";
import { useParams } from "react-router-dom";
import StudentForm from "../form/StudentForm";
import useStudent from "../../../hooks/student/useStudent";
import useUpdateStudent from "../../../hooks/student/useUpdateStudent";

// EditStudent Component
const EditStudent = () => {
    const { id } = useParams();
    const { getStudent, student, loadingStudent } = useStudent();
    const { updateStudent, resUpdateStudent } = useUpdateStudent();

    //onSubmit handler
    const onSave = (studentObject) => {
        updateStudent(studentObject);
    };

    // Load data from server and reinitialize student form
    React.useEffect(() => {
        getStudent(id);
    }, [id]);

    // Return student form
    return (
        <StudentForm
            item={student}
            onSave={onSave}
            response={resUpdateStudent}
            loading={loadingStudent}
            enableReinitialize>
            Update Student
        </StudentForm>
    );
};

// Export EditStudent Component
export default EditStudent;
