//Task 1 - Created Employee Class

//Defines an Employee class to store employee details and salary calculations
class Employee {
    constructor(name, id, department, salary) {
        
        //Stores the employee's full name
        this.name = name;

        //Stores the Employee ID
        this.id = id;

        //Stores the department where the employee works
        this.department = department;

        //Stores the employee's monthly salary
        this.salary = salary;
    }

    //Returns formatted details of the employee as a string
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    //Computes and returns the annual salary by multiplying the monthly salary by 12
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

//Creating an instance of the Employee class
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

//Displaying employee details and logging them to the console
console.log(emp1.getDetails());

//Logging the annual salary to the console
//Expected output: 60000
console.log("Annual salary:", emp1.calculateAnnualSalary());