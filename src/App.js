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
                    <div class="flex flex-wrap justify-center mt-8">
                        <Employee
                            name="Jojo"
                            role="Intern"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Power"
                            role="Intern"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Makima"
                            role="SeniorDev"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Denji"
                            role={role}
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            role="Intern"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Jojo"
                            role="Intern"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Power"
                            role="Intern"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Makima"
                            role="SeniorDev"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            name="Denji"
                            role={role}
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
                        <Employee
                            role="Intern"
                            img="https://www.mohenesh.com/wp-content/uploads/2021/11/Doge-meme-2.webp"
                        />
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
