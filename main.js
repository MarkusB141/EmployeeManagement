import {EmployeeView} from "./EmployeeView.js"; // mittels ./ immer den relativen Pfad angeben!!
import {EmployeeModel} from "./EmployeeModel.js";
import {EmployeeListDAO} from "./EmployeeListDAO.js";

function start(){
    const employeeListDAO = new EmployeeListDAO("employees", "employeeNextId"); // keys für Local Storage werden hier übergeben
    const employeeModel = new EmployeeModel(employeeListDAO); // hier findet die Dependency Injection statt 
    const employeeView = new EmployeeView(employeeModel); // doa wird model injiziert, model wird view injiziert

    employeeView.initialize();
}

document.addEventListener('DOMContentLoaded', () => {
    start();
});