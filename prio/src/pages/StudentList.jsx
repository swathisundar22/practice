import { useEffect, useState } from "react";

function StudentList() {

    const [students, setStudents] = useState([]);

    const loadStudents = async () => {

        const response = await fetch(
            "http://localhost:5000/api/student"
        );

        const data = await response.json();

        setStudents(data);

    };

    useEffect(() => {

        loadStudents();

    }, []);

    return (

        <div align="center">

            <h2>Student List</h2>

            <table border="1" width="60%">

                <thead>

                    <tr>

                        <th>S.No</th>

                        <th>Name</th>

                        <th>Course</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        students.map((student, index) => (

                            <tr key={student._id}>

                                <td>{index + 1}</td>

                                <td>{student.name}</td>

                                <td>{student.course}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default StudentList;
