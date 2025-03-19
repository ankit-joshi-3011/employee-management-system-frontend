import axios from "axios";
import { API_BACKEND_URL, DEPARTMENT_REST_API_BASE_URI_PATH, EMPLOYEE_REST_API_BASE_URI_PATH } from "../constants";

export function getAllDepartments() {
    return axios.get(API_BACKEND_URL + DEPARTMENT_REST_API_BASE_URI_PATH);
}

export function createEmployee(newEmployeeDetails) {
    return axios.post(API_BACKEND_URL + EMPLOYEE_REST_API_BASE_URI_PATH, newEmployeeDetails);
}