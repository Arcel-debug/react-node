import React from "react";
import {
    Button, Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useHandleForm from "../hooks/useHandleForm";

const StudentForm = (props) => {
    const {item, onCancel, onSave, response, loading } = props;
    
    const {
        onFinishAll,
        validated
    } = useHandleForm(item, onSave);

    return (
        <div className="form-wrapper">
            <Form
                noValidate
                validated={validated}
                onSubmit={onFinishAll}
            >
                <Form.Group controlId="validate-name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        required
                        name="name"
                        type="text"
                        placeholder="Enter name"
                        defaultValue={item?.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        Name field is required
                    </Form.Control.Feedback>

                </Form.Group>
                <Form.Group controlId="validate-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        required
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        defaultValue={item?.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        Email field is required
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validate-rollno">
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control 
                        required
                        name="rollno"
                        type="number"
                        placeholder="Enter roll number"
                        defaultValue={item?.rollno}
                    />
                    <Form.Control.Feedback type="invalid">
                        Roll number field is required
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={'/student-list'}>
                        <Button variant="secondary">
                            Back
                        </Button>
                    </Link>
                    
                    <Button type="submit">
                        {props.children}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default StudentForm;
