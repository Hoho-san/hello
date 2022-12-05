import EditEmployee from "./EditEmployee";

function Employee(props) {
    // const showEmployees = true;
    return (
        <div className="min-w-[350px] max-wid-[350px] m-2 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
                className="object-cover round-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                src={props.img}
                alt="Profile"
            />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.name ? props.name : "No name"}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.role ? props.role : "No role"}
                    </p>
                </div>

                <EditEmployee
                    id={props.id}
                    name={props.name}
                    role={props.role}
                    updateEmployee={props.updateEmployee}
                />
            </div>
        </div>
    );

    // return (
    //     <div className="App">
    //         {showEmployees ? (
    //             <>
    //                 {/* you can choose in one of these */}
    //                 <h3>Employee: {props.name ? props.name : "No name"}</h3>
    //                 <p>{props.role ? props.role : "No role"}</p>
    //                 {props.role ? (
    //                     <p class="role">{props.role}</p>
    //                 ) : (
    //                     <p class="norole">No Role</p>
    //                 )}
    //             </>
    //         ) : (
    //             <p>You cannot see employees</p>
    //         )}
    //     </div>
    // );
}
export default Employee;
