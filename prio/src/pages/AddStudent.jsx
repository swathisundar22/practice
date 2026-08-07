import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [loading, setLoading] = useState(false);

    const saveStudent = async () => {

        if (name.trim() === "" || course.trim() === "") {

            alert("Please enter all fields");

            return;

        }

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/student",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        name: name,

                        course: course

                    })

                }
            );

            const data = await response.json();

            alert(data.message);

            // Clear the form
            setName("");
            setCourse("");

            // Navigate to Student List
            navigate("/studentlist");

        }
        catch (error) {

            alert("Unable to connect to the server.");

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    };

    return (

        <div align="center">

            <h2>Add Student</h2>

            <br />

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <br /><br />

            <button
                onClick={saveStudent}
                disabled={loading}
            >
                {loading ? "Saving..." : "Save Student"}
            </button>

        </div>

    );

}

export default AddStudent;