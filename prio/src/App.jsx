import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentList from "./pages/StudentList";

function App() {

    return (

        <div>

            <h1 align="center">
                Student Management System
            </h1>

            <hr />

            <div align="center">

                <Link to="/">
                    Home
                </Link>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/addstudent">
                    Add Student
                </Link>

                &nbsp;&nbsp;&nbsp;&nbsp;

                <Link to="/studentlist">
                    Student List
                </Link>

            </div>

            <hr />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/addstudent"
                    element={<AddStudent />}
                />

                <Route
                    path="/studentlist"
                    element={<StudentList />}
                />

            </Routes>

        </div>

    );

}

export default App;
