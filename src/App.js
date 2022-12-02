import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
    const [role, setRole] = useState("Junior Dev");
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
                    <Employee name="Jojo" role="Intern" />
                    <Employee name="Power" role="Intern" />
                    <Employee name="Makima" role="SeniorDev" />
                    <Employee name="Denji" role={role} />
                    <Employee role="Intern" />
                    <h1 className="text-3xl font-bold underline">
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
