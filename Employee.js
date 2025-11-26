export class Employee {
    #id;
    #firstname;
    #lastname;
    #salary;
    #role; 

    constructor(id, firstname, lastname, role, salary){
        this.#id = id;
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#role = role; 
        if(salary < 0){
            throw new Error('Salary darf nicht negativ sein!');
        }else{
            this.#salary = salary;
        }
    }
    get id(){
        return this.#id;
    }
    get firstname(){
        return this.#firstname;
    }
    get lastname(){
        return this.#lastname;
    }
    get role(){
        return this.#role;
    }
    get salary(){
        return this.#salary;
    }
    set firstname(firstname){
        this.#firstname = firstname;
    }
    set lastname(lastname){
        this.#lastname = lastname;
    }
    set role(role){
        this.#role = role;
    }
    set salary(salary){
        if(salary < 0){
            throw new Error('Salary darf nicht negativ sein!');
        }else{
            this.#salary = salary;
        }
    }
    toJSON(){
        return {
            id: this.#id,
            firstname: this.#firstname,
            lastname: this.#lastname,
            salary: this.#salary,
            role: this.#role
        };
    }
}