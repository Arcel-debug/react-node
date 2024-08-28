import React from "react";
import StudentForm from "../form/StudentForm";
import useCreateStudent from "../../../hooks/student/useCreateStudent";

// CreateStudent Component
const CreateStudent = () => {
    const { createStudent, loadingCreateStudent, resCreateStudent } = useCreateStudent();
    // onSubmit handler
    const onSave = (studentObject) => {
        createStudent(studentObject);
    }

    // Return student form
    return (
        <StudentForm
            onSave={onSave}
            response={resCreateStudent}
            loading={loadingCreateStudent}
            enableReinitialize
        >
            Create Student
        </StudentForm>
    )
}

// Export CreateStudent Component
export default CreateStudent
