import React from "react";
import { Navbar, Container, Row, Col }
    from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./guest-layout.css";

const GuestLayout = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to={"/"}
                                className="nav-link">
                                NodeJs + ReactJs w/ Redux
                            </Link>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="wrapper">
                        <Outlet />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GuestLayout;
