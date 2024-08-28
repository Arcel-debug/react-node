import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StudentTable from "./StudentTable";
import useStudents from "../../../hooks/student/useStudents";

const StudentList = () => {
    const { getStudents, students } = useStudents();

    React.useEffect(() => {
        getStudents();
        // eslint-disable-next-line
    }, []);

    const DataTable = () => {
        return students?.map((res, i) => {
            return <StudentTable
                obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <div className="d-flex justify-content-end">
                <Link to={'/student-create'}>
                    <Button variant="primary">
                        Create Student
                    </Button>
                </Link>
            </div>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default StudentList;
