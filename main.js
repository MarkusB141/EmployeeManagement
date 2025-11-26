import {Employee} from "./Employee.js"; // mittels ./ immer den relativen Pfad angeben!!
import {EmployeeView} from "./EmployeeView.js";
import {EmployeeModel} from "./EmployeeModel.js";
import {EmployeeListDAO} from "./EmployeeListDAO.js";

function start(){
    const employeeListDAO = new EmployeeListDAO();
    const employeeModel = new EmployeeModel(employeeListDAO); // hier findet die Dependency Injection statt 
    const employeeView = new EmployeeView(employeeModel); // doa wird model injiziert, model wird view injiziert

    employeeView.initialize();
}

document.addEventListener('DOMContentLoaded', () => {
    start();
});