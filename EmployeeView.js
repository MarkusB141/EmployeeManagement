import { Employee } from "./Employee.js";

export class EmployeeView{
    constructor(employeeModel){
        this.employeeModel = employeeModel;
        this.currentIndex = null;
    }
    initialize(){
        this.employeeUl = document.getElementById("employeeUl");
        this.id = document.getElementById("employeeIdInput");
        this.firstname = document.getElementById("firstnameInput");
        this.lastname = document.getElementById("lastnameInput");
        this.role = document.getElementById("roleInput");
        this.salary = document.getElementById("salaryInput");
        this.addButton = document.getElementById("addButton");

        this.addButton.addEventListener("click", () => {
            // try catch eingebaut wegen Fehlermeldung durch this.employeeModel.addEmployee(employee) ansonsten viele Bugs
            try{ 
                const employee = this.readEmployee();
                // Check ob gerade ein neuer Employee erstellt wird oder einer bearbeitet wird
                if (this.currentIndex === null) {
                    //Neuer Employee
                    this.employeeModel.addEmployee(employee);

                } else {
                    // Employee bearbeiten 
                    this.employeeModel.updateEmployee(this.currentIndex, employee);
                    this.currentIndex = null;        // Bearbeiten-Modus verlassen
                    this.id.disabled = false;        // ID-Feld wieder freigeben
                }
                this.updateList();

                this.id.value = "";
                this.firstname.value = "";
                this.lastname.value = "";
                this.role.value = "";
                this.salary.value = "";
            
            }catch (e){
                alert(e.message)
            }
        });

        this.updateList();
    }
    displayEmployee(emp, i){
        // Input Felder mit aktuellen emp auffüllen
        this.id.value = emp.id;
        this.firstname.value = emp.firstname;
        this.lastname.value = emp.lastname;
        this.role.value = emp.role;
        this.salary.value = emp.salary;

        this.currentIndex = i; // merken welcher eintrag bearbeitet wird

        this.id.disabled = true; // zusätzliche absicherung um id nicht nachträglich zu ändern
    }

    readEmployee(){
        const employee = new Employee(this.id.value, this.firstname.value, this.lastname.value, this.role.value, Number(this.salary.value));
        return employee;
    }
    updateList() {
    const list = this.employeeModel.getAllEmployees(); // Liste von Model holen
    this.employeeUl.innerHTML = ""; // Liste im HTML leeren

    for (let i = 0; i < list.length; i++) {

        const emp = list[i];
        const li = document.createElement("li"); // li erstellen
        li.textContent = "ID:" + emp.id + " " +emp.firstname + " " + emp.lastname + " "; //Text einfügen

        const editBtn = document.createElement("button"); // edit Button erstellen
        editBtn.textContent = "edit"; //Text einfügen
        editBtn.onclick = () => { // onclick Attribut zuweisen
            this.displayEmployee(emp, i);
        };

        const removeBtn = document.createElement("button"); // remove Button erstellen
        removeBtn.textContent = "remove"; // Text einfügen
        removeBtn.onclick = () => { // onclick Attribut zuweisen
            this.employeeModel.removeEmployee(i);
            this.updateList();
        };

        li.appendChild(editBtn); // Buttons nach Li einfügen
        li.appendChild(removeBtn);

        this.employeeUl.appendChild(li); // Li nach Ul einfügen
        }
    }
}