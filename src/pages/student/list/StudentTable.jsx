import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useDeleteStudent from "../../../hooks/student/useDeleteStudent";

const StudentTableRow = (props) => {
    const { id, name, email, rollno } = props.obj;
    const { deleteStudent } = useDeleteStudent();

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <Link className="edit-link"
                    to={"/student-update/" + id}>
                    Edit
                </Link>
                <Button
                    onClick={() => deleteStudent(id)}
                    size="sm" variant="danger">
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default StudentTableRow;
