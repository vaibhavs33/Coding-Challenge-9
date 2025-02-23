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

//Task 2 - Created Manager Class with Inheritance

//Defines a Manager class that extends the Employee class and adds management responsibilities
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        
        //Calls the Employee constructor to inherit its properties
        super(name, id, department, salary);

        //Stores the number of employees managed by the manager
        this.teamSize = teamSize;
    }

    //Overrides getDetails() to include the team size in the details
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    //Computes and returns the manager's annual bonus which is 10% of the annual salary
    calculateBonus() {
        return this.salary * 12 * 0.10;
    }

    //Computes the total annual salary including the bonus
    calculateAnnualSalary() {
        return (this.salary * 12) + this.calculateBonus();
    }
}

//Creating an instance of the Manager class
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

//Displaying manager details and logging them to the console
console.log(mgr1.getDetails()); 

//Logging the bonus to the console
//Expected output: 9600
console.log("Bonus:", mgr1.calculateBonus());

//Task 3 - Created Company Class

//Defines a Company class to manage employees and payroll
class Company {
    constructor(name) {
        
        //Stores the company name
        this.name = name;

        //Stores the list of employees working in the company
        this.employees = [];
    }

    //Adds an employee to the company's employee list
    addEmployee(employee) {
        this.employees.push(employee);
    }

    //Displays the details of all employees in the company
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
}

//Creating a company instance
const company = new Company("TechCorp");

//Adding Alice Johnson (Employee)
company.addEmployee(emp1);

//Adding John Smith (Manager)
company.addEmployee(mgr1);

//Display the list of employees before promotion
company.listEmployees();