/**     
============================================
; Title: Assignment 7.2 - Javazon App
; Author: Tierre Green from Github 
; Modified by: Chad ONeal
; Date: 07/03/2022
; Description: Javazon App Assignment 7.2 js code
============================================
*/

//button submission function.
document.getElementById("btnDisplayListing").onclick = function() {myFunction()};

//products variable declaration.
let products = document.getElementById("productsSelect");
document.getElementById("productsSelect").style.display = "none";

//services variable declaration.
let services = document.getElementById("servicesSelect");
document.getElementById("servicesSelect").style.display = "none";

//employees variable declaration.
let employees = document.getElementById("employeesSelect");
document.getElementById("employeesSelect").style.display = "none";

//function for results
function myFunction() {

//choice variable declaration.
    let choice = document.getElementById("listing").value;

//if condition shows products and sets for all other conditions to not display.
    if (choice == "products") {
        products.style.display = "block";
        services.style.display = "none";
        employees.style.display = "none";

    //if else condition shows services and sets for all other conditions to not display. 
    } else if (choice == "services") {
        products.style.display = "none";
        services.style.display = "block";
        employees.style.display = "none"

    //if else condition shows employees and sets for all other conditions to not display.
    } else if (choice == "employees") {
        products.style.display = "none";
        services.style.display = "none";
        employees.style.display = "block";

    //else statement for all other conditions to not display.
    } else {
        products.style.display = "none";
        services.style.display = "none";
        employees.style.display = "none";
    }
};

// product class and total value creation
class Product {
    constructor(id, description, price, quantity) {
        this.id = id;
        this.description = description;
        this.price = price.toFixed(2);
        this.quantity = quantity;
    }

    get totalValue () {
        return this.price * this.quantity;
    }
      
};

// service class creation
class Service {
    constructor(id, description, hourlyRate, min) {
        this.id = id;
        this.description = description;
        this.hourlyRate = hourlyRate.toFixed(2);
        this.min = min;
    }
};

//employee class creation
class Employee {
    constructor(id, lastName, firstName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary.toFixed(2)
    }
}

//HTML product table
const htmlProduct = new Product (9781118008188, "HTML and CSS: Design and Build Websites", 22.26, 10);

document.getElementById("HTMLProductID").innerHTML = htmlProduct.id;
document.getElementById("HTMLDescription").innerHTML = htmlProduct.description;
document.getElementById("HTMLPrice").innerHTML = htmlProduct.price;
document.getElementById("HTMLQuantity").innerHTML = htmlProduct.quantity;
document.getElementById("HTMLTotalValue").innerHTML = htmlProduct.totalValue.toFixed(2);

//Javascript Guide product table
const javascriptProduct = new Product (9781491952023, "JavaScript: The Definitive Guide 7/E", 41.33, 7);

document.getElementById("DefinitiveID").innerHTML = javascriptProduct.id;
document.getElementById("DefinitiveDescription").innerHTML = javascriptProduct.description;
document.getElementById("DefinitivePrice").innerHTML = javascriptProduct.price;
document.getElementById("DefinitiveQuantity").innerHTML = javascriptProduct.quantity;
document.getElementById("DefinitiveTotalValue").innerHTML = javascriptProduct.totalValue.toFixed(2);

//Learning JavaScript product table
const LearnProduct = new Product (9781449331818, "Learning JavaScript Design Patterns 1/E", 25.99, 3);

document.getElementById("LearningID").innerHTML = LearnProduct.id;
document.getElementById("LearningDescription").innerHTML = LearnProduct.description;
document.getElementById("LearningPrice").innerHTML = LearnProduct.price;
document.getElementById("LearningQuantity").innerHTML = LearnProduct.quantity;
document.getElementById("LearningTotalValue").innerHTML = LearnProduct.totalValue.toFixed(2);

//Express product table
const expressProduct = new Product (9781617292422, "Express in Action: Writing, building, and testing Node.js applications 1/E", 34.91, 3);

document.getElementById("ExpressID").innerHTML = expressProduct.id;
document.getElementById("ExpressDescription").innerHTML = expressProduct.description;
document.getElementById("ExpressPrice").innerHTML = expressProduct.price;
document.getElementById("ExpressQuantity").innerHTML = expressProduct.quantity;
document.getElementById("ExpressTotalValue").innerHTML = expressProduct.totalValue.toFixed(2);

//Mongos product table
const mongoProduct = new Product (9781491954461, "MongoDB The Definitive Guide", 33.7, 8);

document.getElementById("MongoID").innerHTML = mongoProduct.id;
document.getElementById("MongoDescription").innerHTML = mongoProduct.description;
document.getElementById("MongoPrice").innerHTML = mongoProduct.price;
document.getElementById("MongoQuantity").innerHTML = mongoProduct.quantity;
document.getElementById("MongoTotalValue").innerHTML = mongoProduct.totalValue.toFixed(2);

//website service table
const webService = new Service (100, "Website Design", 150, 25);

document.getElementById("DesignID").innerHTML = webService.id;
document.getElementById("DesignDescription").innerHTML = webService.description;
document.getElementById("DesignHourlyRate").innerHTML = webService.hourlyRate;
document.getElementById("DesignBillHours").innerHTML = webService.min;


//devops consulting table
const devOpsService = new Service (101, "DevOps Consulting", 125, 50);

document.getElementById("devopsID").innerHTML = devOpsService.id;
document.getElementById("devopsDescription").innerHTML = devOpsService.description;
document.getElementById("devopsHourlyRate").innerHTML = devOpsService.hourlyRate;
document.getElementById("devopsBillHours").innerHTML = devOpsService.min;

//design consulting table
const database = new Service (102, "Database Design", 125, 15);

document.getElementById("dataID").innerHTML = database.id;
document.getElementById("dataDescription").innerHTML = database.description;
document.getElementById("dataHourlyRate").innerHTML = database.hourlyRate;
document.getElementById("dataBillHours").innerHTML = database.min;

//employee table output #1007
const onealEmployee = new Employee (1007, "ONeal", "Chad", 113.95);

document.getElementById("ONealID").innerHTML = onealEmployee.id;
document.getElementById("ONealLastName").innerHTML = onealEmployee.lastName;
document.getElementById("ONealFirstName").innerHTML = onealEmployee.firstName;
document.getElementById("ONealSalary").innerHTML = onealEmployee.salary;

//employee table output #1008
const oneal2Employee = new Employee (1008, "ONeal", "Matt", 100.30);

document.getElementById("ONeal2ID").innerHTML = oneal2Employee.id;
document.getElementById("ONeal2LastName").innerHTML = oneal2Employee.lastName;
document.getElementById("ONeal2FirstName").innerHTML = oneal2Employee.firstName;
document.getElementById("ONeal2Salary").innerHTML = oneal2Employee.salary;

//employee table output #1009
const bacosaEmployee = new Employee (1009, "Bacosa", "Danny", 63.50);

document.getElementById("DanID").innerHTML = bacosaEmployee.id;
document.getElementById("DanLastName").innerHTML = bacosaEmployee.lastName;
document.getElementById("DanFirstName").innerHTML = bacosaEmployee.firstName;
document.getElementById("DanSalary").innerHTML = bacosaEmployee.salary;

//employee table output #1010
const bradEmployee = new Employee (1010, "Hutchison", "Brad", 55);

document.getElementById("BradID").innerHTML =bradEmployee.id;
document.getElementById("BradLastName").innerHTML = bradEmployee.lastName;
document.getElementById("BradFirstName").innerHTML = bradEmployee.firstName;
document.getElementById("BradSalary").innerHTML = bradEmployee.salary;

//employee table output #1011
const scottEmployee = new Employee (1011, "Swain", "Scott", 32.50);

document.getElementById("ScottID").innerHTML = scottEmployee.id;
document.getElementById("ScottLastName").innerHTML = scottEmployee.lastName;
document.getElementById("ScottFirstName").innerHTML = scottEmployee.firstName;
document.getElementById("ScottSalary").innerHTML = scottEmployee.salary;