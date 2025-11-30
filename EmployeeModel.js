// import des Value Objekts im Model, da es schöner ist wenn Model das Objekt erstellt und nicht die View
import { Employee } from "./Employee.js";

export class EmployeeModel{
    constructor(employeeListDAO){
        this.employeeListDAO = employeeListDAO; // DAO wird ins Model injiziert
        this.employeeList = employeeListDAO.loadAll().map(obj => new Employee(obj.id, obj.firstname, obj.lastname, obj.role, obj.salary)); //Model ladet die Liste mittels DAO
    }

    // Diese Methode zusätzlich eingebaut damit Model das Objekt erstellt und nicht View
    createEmployee(employeeData){
        return new Employee(employeeData.id, employeeData.firstname, employeeData.lastname, employeeData.role, employeeData.salary);
    }

    addEmployee(employeeData){
        // Prüfung auf doppelte ID
        for(let i=0; i<this.employeeList.length; i++){
            if(this.employeeList[i].id === employeeData.id){
                throw new Error("Diese ID exestiert bereits")
            }
        }
        this.employeeList.push(this.createEmployee(employeeData)); // View übergibt employee, Model pusht in Liste
        this.employeeListDAO.saveAll(this.employeeList); // DAO Speichert
    }

    updateEmployee(index, employeeData){
        this.employeeList[index] = this.createEmployee(employeeData); // View übergibt index und employee, Model updated Liste
        this.employeeListDAO.saveAll(this.employeeList); // DAO Speichert
    }

    removeEmployee(index){
        this.employeeList.splice(index, 1); // View sagt welcher Index gelöscht werden soll (1 sagt wie viele stellen)
        this.employeeListDAO.saveAll(this.employeeList); // DAO sorgt dafür das Liste gespeichert wird
    }

    // nötig um die Liste im View anzuzeigen
    getAllEmployees(){ 
        return this.employeeList; 
    }
}