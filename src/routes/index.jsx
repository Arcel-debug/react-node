import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const GuestLayout = React.lazy(() => import("../components/layout/guest-layout"));
const StudentList = React.lazy(() => import("../pages/student/list"));
const StudentCreate = React.lazy(() => import("../pages/student/add"));
const StudentUpdate = React.lazy(() => import("../pages/student/update"));

const appRouter = () => {
    return (
        <Suspense >
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <GuestLayout />
                        }
                        exact={true}
                    >
                        <Route 
                            path="/"
                            exact={true}
                            element={
                                <Navigate to="student-list" />
                            }
                        />
                        <Route
                            path={`student-list`}
                            element={<StudentList />}
                            exact={true}
                        />
                        <Route
                            path={`student-create`}
                            element={<StudentCreate />}
                            exact={true}
                        />
                        <Route
                            path={`student-update/:id`}
                            element={<StudentUpdate />}
                            exact={true}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default appRouter;