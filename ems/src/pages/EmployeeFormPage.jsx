import React, { useEffect, useState } from "react";
import { createEmployee, getActiveManagersByDepartment, getAllDepartments } from "../services/employeeService";

function EmployeeFormPage() {
    const [ name, setName ] = useState("");
    const [ jobTitle, setJobTitle ] = useState("");
    const [ departments, setDepartments ] = useState([]);
    const [ selectedDepartmentId, setSelectedDepartmentId ] = useState("");
    const [ managers, setManagers ] = useState([]);
    const [ selectedManagerId, setSelectedManagerId ] = useState("");

    // Fetch departments on component mount
    // This call does not have dependencies (as indicated in the second paramter)
    // (the effect will only activate if the values in the second parameter change)
    useEffect(() => {
        getAllDepartments()
            .then((response) => setDepartments(response.data))
            .catch((error) => console.error('Error fetching departments: ', error));
    }, []);

    // Fetch active managers when the selected department ID changes
    useEffect(() => {
        if (selectedDepartmentId) {
            getActiveManagersByDepartment(selectedDepartmentId)
                .then((response) => setManagers(response.data))
                .catch((error) => console.error('Error fetching active managers by department: ', error));
        }
    }, [ selectedDepartmentId ]);

    async function handleFormSubmit(e) {
        e.preventDefault(); // Prevent the page from reloading on form submission

        const newEmployeeDetails = {
            employeeType: "REGULAR",
            name: name,
            jobTitle: jobTitle,
            departmentId: selectedDepartmentId,
            managerId: selectedManagerId
        };

        try {
            await createEmployee(newEmployeeDetails);
            alert('Employee created successfully');
        } catch (error) {
            console.error('Error creating employee: ', error);
            alert('Failed to create employee');
        }
    }

    return (
        <div>
            <h1>Create New Regular Employee</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Employee Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div>
                    <label>Job Title:</label>
                    <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />
                </div>

                <div>
                    <label>Department:</label>
                    <select value={selectedDepartmentId} onChange={(e) => setSelectedDepartmentId(e.target.value)} required>
                        {
                            departments.map((department) => (
                                <option key={department.id} value={department.id}>{department.name}</option>
                            ))
                        }
                    </select>
                </div>
                
                <div>
                    <label>Manager:</label>
                    <select value={selectedManagerId} onChange={(e) => setSelectedManagerId(e.target.value)} required>
                        {
                            managers.map((manager) => (
                                <option key={manager.id} value={manager.id}>{manager.name}</option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EmployeeFormPage;