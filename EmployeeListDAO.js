import { Employee } from "./Employee.js"; // benötigt für wiedererstellen meiner Liste

export class EmployeeListDAO{
    loadAll(){
        // JSON aus dem Local Storage holen
        const json = localStorage.getItem("employees");
        // Absicherung, falls nichts im Local Storage vorhanden ist
        if (!json){
            return [];
        }
        // vom JSON bekomm ich meine Plain List (einfaches Objekt) 
        const plainList = JSON.parse(json);
        // aus Plain List wieder mein Objekt erstellen (benötige dazu mein import { Employee })
        return plainList.map(obj => new Employee(obj.id, obj.firstname, obj.lastname, obj.role, obj.salary));
    }

    saveAll(employeeList){
        // da unsere Liste Private Attribute hat muss ich eine neue Liste erstellen mit einfachen Objekten
        // .map erzeugt ein neues Array indem es über jeden Index geht
        // const plainList = employeeList.map(e => ({
        //     id: e.id,
        //     firstname: e.firstname,
        //     lastname: e.lastname,
        //     role: e.role,
        //     salary: e.salary
        // }));
        // Array in einen JSON string umwandeln
        const json = JSON.stringify(employeeList);
        // In Local Storage speichern
        localStorage.setItem("employees", json);
    }
}