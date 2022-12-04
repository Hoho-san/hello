import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [role, setRole] = useState("Junior Dev");
    const [employees, setEmployees] = useState([
        {
            name: "Jojo",
            role: "Intern",
            img: "https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp",
        },
        {
            name: "Power",
            role: "Intern",
            img: "https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg",
        },
        {
            name: "Makima",
            role: "Intern",
            img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
        },
        {
            name: "Denji",
            role: "Intern",
            img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
        },
        {
            name: "Gojo",
            role: "Intern",
            img: "https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg",
        },
        {
            name: "Tanjiro",
            role: "Intern",
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
        },
        {
            name: "Conan",
            role: "Intern",
            img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
        },
    ]);
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
                            return (
                                <Employee
                                    key={uuidv4()}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                />
                            );
                        })}
                    </div>
                    <h1 className="border-gray-900 text-3xl font-bold underline italic ... ">
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
