function Employee(props) {
    return (
        <>
            {/* you can choose in one of these */}
            <h3>Employee: {props.name ? props.name : "No name"}</h3>
            <p>{props.role ? props.role : "No role"}</p>
            {props.role ? (
                <p class="role">{props.role}</p>
            ) : (
                <p class="norole">No Role</p>
            )}
        </>
    );
}
export default Employee;
