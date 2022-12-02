import "./App.css";
import Employee from "./components/Employee";

function App() {
    console.log("we are about to list the employees");
    const showEmployees = true;
    return (
        <div className="App">
            {showEmployees ? (
                <>
                    {" "}
                    <Employee name="Jojo" role="Intern" />
                    <Employee name="Power" role="Intern" />
                    <Employee name="Makima" role="SeniorDev" />
                    <Employee name="Denji" />
                    <Employee role="Intern" />
                </>
            ) : (
                <h3>No employees</h3>
            )}
        </div>
    );
}

export default App;
