// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeesArray = [];
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects  
  
  // variable used for while() condition 
  let addMoreEmployees = true;

  // while loop will run until "addMoreEmployees" = false, trigered by comfirm prompt
  while (addMoreEmployees) {
    let employee = {
      firstName: "",
      lastName: "",
      salary: 0
    };

    // prompt() trigers a prompt for user input
    employee.firstName = prompt("Enter first name:");
    employee.lastName = prompt("Enter last name:");
    employee.salary = +prompt("Enter salary:"); // + in front of prompt(), converts strings to integers
    
    // isNaN() checks to see if "employee.salary" is "Not a Number" 
    if (isNaN(employee.salary)) { 
      employee.salary = 0;
    }

    // confirm() triggers a user prompt with "Ok" and "Cancel"
    if (!confirm("Do you want to add another employee?")) { 
      addMoreEmployees = false;
    }

    // .push() adds object "employee" to "employeesArray"
    employeesArray.push(employee);
    
  }

  // return sends the collected data to global variable "employeesArray"
  return employeesArray;  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let totalSalary = 0;

  // .forEach() goes through each element in "employeesArry" adding "employee.salary" to "totalSalary" 
  employeesArray.forEach(employee => {totalSalary += employee.salary});

  // .toLocalSting() converts to US dollars
  let averageSalary = (totalSalary / employeesArray.length).toLocaleString('en-US', {style: 'currency', currency: 'USD'})

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Math.random gives random numbers Math.floor rounds down to nearest integer 
  let rNumber = Math.floor(Math.random() * employeesArray.length);

  console.log(`Congratulations to ${employeesArray[rNumber].firstName} ${employeesArray[rNumber].lastName}, our random drawing winner!`);  
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
