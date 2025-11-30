export class EmployeeListDAO{
    #key; 

    constructor(key){
        this.#key = key;
    }

    loadAll(){
        // JSON aus dem Local Storage holen
        const json = localStorage.getItem(this.#key);
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
        localStorage.setItem(this.#key, json);
    }
}