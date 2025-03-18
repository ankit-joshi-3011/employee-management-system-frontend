import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Employee Management System</h1>
            <p>Please select an option below to continue:</p>
            <Link to='/create-employee'>Create Employee</Link>
        </div>
    );
}

export default HomePage;