export class EmployeeView{
    constructor(employeeModel){
        this.employeeModel = employeeModel; // Model wird in View injiziert
        this.currentIndex = null; // cuurent Index für "Bearbeitungsmodus"
    }

    initialize(){
        // alle Felder weren Initialisiert
        this.employeeUl = document.getElementById("employeeUl");
        this.firstname = document.getElementById("firstnameInput");
        this.lastname = document.getElementById("lastnameInput");
        this.role = document.getElementById("roleInput");
        this.salary = document.getElementById("salaryInput");
        this.addButton = document.getElementById("addButton");
        this.totalSalOutput = document.getElementById("totalSalOutput");
        // Button bekommt click Funktion zugewiesen
        this.addButton.addEventListener("click", () => {
            // try catch eingebaut wegen Fehlermeldung durch erstellen sines Employees (salary < 0)
            try{ 
                const employeeData = this.readEmployee();
                // Check ob Bearbeitungs-Modus oder Neu_erstellen-Modus
                if (this.currentIndex === null) {
                    //Neuer Employee
                    this.employeeModel.addEmployee(employeeData);
                } else {
                    // Employee bearbeiten 
                    this.employeeModel.updateEmployee(this.currentIndex, employeeData);
                    this.currentIndex = null;        // Bearbeiten-Modus verlassen
                }
                this.updateList();
                // Eingabefelder leeren
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
        this.firstname.value = emp.firstname;
        this.lastname.value = emp.lastname;
        this.role.value = emp.role;
        this.salary.value = emp.salary;
        // Wechsel in Bearbeitungsmodus:
        this.currentIndex = i; // merken welcher eintrag bearbeitet wird
    }
    // readEmployee gibt nur Objekt Daten zurück. Damit Model dann Objekt erstellen kann
    readEmployee(){
        return {
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            role: this.role.value,
            salary: Number(this.salary.value),
        };
    }

    updateList() {
        const list = this.employeeModel.getAllEmployees(); // Liste von Model holen
        this.employeeUl.innerHTML = ""; // Liste im HTML leeren
        this.totalSalOutput.innerHTML = ""; // Span mit Totalsal leeren

        for (let i = 0; i < list.length; i++) {
            // Listen-Element
            const emp = list[i];
            const li = document.createElement("li"); // li erstellen
            li.textContent = "ID: " + emp.id + " " +emp.firstname + " " + emp.lastname + " "; //Text einfügen
            // Edit-Button
            const editBtn = document.createElement("button"); // edit Button erstellen
            editBtn.textContent = "Edit"; //Text einfügen
            editBtn.onclick = () => { // onclick Attribut zuweisen
                this.displayEmployee(emp, i);
            };
            // Remove-Button
            const removeBtn = document.createElement("button"); // remove Button erstellen
            removeBtn.textContent = "Remove"; // Text einfügen
            removeBtn.onclick = () => { // onclick Attribut zuweisen
                this.employeeModel.removeEmployee(i);
                this.updateList();
            };
            // Elemente einfügen
            li.appendChild(editBtn); // Buttons nach Li einfügen
            li.appendChild(removeBtn);
            this.employeeUl.appendChild(li); // Li nach Ul einfügen
        }
        // Anzeige für Total Salary aktualisieren
        const totalSal = this.employeeModel.getTotalSal();
        this.totalSalOutput.textContent = (`Total Salary of all Employees: $${totalSal.toFixed(2)}`);
    }
}