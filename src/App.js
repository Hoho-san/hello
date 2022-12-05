import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
    const [role, setRole] = useState("Junior Dev");
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Jojo",
            role: "Intern",
            img: "https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp",
        },
        {
            id: 2,
            name: "Power",
            role: "Intern",
            img: "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg",
        },
        {
            id: 3,
            name: "Makima",
            role: "Intern",
            img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
        },
        {
            id: 4,
            name: "Denji",
            role: "Intern",
            img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
        },
        {
            id: 5,
            name: "Gojo",
            role: "Intern",
            img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg",
        },
        {
            id: 6,
            name: "Tanjiro",
            role: "Intern",
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        },
    ]);

    function updateEmployee(id, newName, newRole) {
        console.log("Update Employee inside of app.js");
        const updatedEmployees = employees.map((employee) => {
            if (id === employee.id) {
                return { ...employee, name: newName, role: newRole };
            } else return employee;
        });
        setEmployees(updatedEmployees);
    }

    function newEmployee(name, role, img) {
        const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
        };
        setEmployees([...employees, newEmployee]);
    }

    const showEmployees = true;
    return (
        <div className="App">
            {showEmployees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    ></input>
                    <div className="flex flex-wrap justify-center mt-8">
                        {employees.map((employee) => {
                            console.log(employee);
                            console.log(uuidv4());
                            const editEmployee = (
                                <EditEmployee
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    updateEmployee={updateEmployee}
                                />
                            );
                            return (
                                <Employee
                                    key={employee.id}
                                    id={employee.id}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                    editEmployee={editEmployee}
                                />
                            );
                        })}
                    </div>
                    <div className="place-content-center">
                        <AddEmployee newEmployee={newEmployee} />
                    </div>

                    <h1 className="place-content-center border-gray-900 text-3xl font-bold underline italic ... ">
                        Hello world!
                    </h1>
                </>
            ) : (
                <h3>No employees</h3>
            )}
        </div>
    );
}

export default App;
