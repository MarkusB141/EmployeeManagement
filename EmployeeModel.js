export class EmployeeModel{
    constructor(employeeListDAO){
        this.employeeListDAO = employeeListDAO; // DAO wird ins Model injiziert
        this.employeeList = employeeListDAO.loadAll(); //Moddel ladet die Liste mittels DAO
    }
    addEmployee(employee){
        // Prüfung auf doppelte ID
        for(let i=0; i<this.employeeList.length; i++){
            if(this.employeeList[i].id === employee.id){
                throw new Error("Diese ID exestiert bereits")
            }
        }
        this.employeeList.push(employee); // View übergibt employee, Model pusht in Liste
        this.employeeListDAO.saveAll(this.employeeList); // DAO sorgt dafür das Liste gespeichert wird
    }
    updateEmployee(index, employee){
        this.employeeList[index] = employee; // View übergibt index und employee, Model updated Liste
        this.employeeListDAO.saveAll(this.employeeList); // DAO sorgt dafür das Liste gespeichert wird
    }
    removeEmployee(index){
        this.employeeList.splice(index, 1); // View sagt welcher Index gelöscht werden soll (1 sagt wie viele stellen)
        this.employeeListDAO.saveAll(this.employeeList); // DAO sorgt dafür das Liste gespeichert wird
    }
    getAllEmployees(){ // nötig um die Liste im View anzuzeigen
        return this.employeeList; 
    }
}