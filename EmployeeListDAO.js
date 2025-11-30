export class EmployeeListDAO{
    #keyEmp; 
    #keyId;

    constructor(keyEmployee, nextIdKey){
        this.#keyEmp = keyEmployee;
        this.#keyId = nextIdKey
    }

    loadId(){
        const current = localStorage.getItem(this.#keyId);
        let nextId;
        if (current == null){
            nextId = 1;
        }else{
            nextId = Number(current) + 1;
        }
        // Local Storage speichert nur Strings
        localStorage.setItem(this.#keyId, String(nextId));

        return nextId;
    }

    loadAll(){
        // JSON aus dem Local Storage holen
        const json = localStorage.getItem(this.#keyEmp);
        // Absicherung, falls nichts im Local Storage noch nichts vorhanden ist
        if (!json){
            return [];
        }
        // vom JSON bekomm ich meine Plain List (einfaches Objekt) 
        const plainList = JSON.parse(json);
        // aus Plain List wieder mein Objekt erstellen (benötige dazu mein import { Employee })
        return plainList;
    }

    saveAll(employeeList){
        // Array in einen JSON string umwandeln
        const json = JSON.stringify(employeeList);
        // In Local Storage speichern
        localStorage.setItem(this.#keyEmp, json);
    }
}