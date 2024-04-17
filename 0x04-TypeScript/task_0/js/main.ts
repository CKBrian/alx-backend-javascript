interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Brian",
  lastName: "Chumo",
  age: 24,
  location: "Nairobi",
}

const student2: Student = {
  firstName: "Boniface",
  lastName: "Kahenu",
  age: 25,
  location: "Nairobi",
}

const studentsList: Student[] = [student1, student2]

/*Render the table*/
const table = document.createElement("table");
/*Welcome message*/
document.body.appendChild(document.createElement("h1")).textContent = "Welcome to Task 0 students Table";

/*Table Heading*/
const tHead = document.createElement("tr");
const fNametitle = document.createElement("th");
const lNameTitle = document.createElement("th");
const ageCellTitle = document.createElement("th");
const locationCellTitle = document.createElement("th");

fNametitle.textContent = "FirstName";
lNameTitle.textContent = "LastName";
ageCellTitle.textContent = "Age";
locationCellTitle.textContent = "Location";

tHead.appendChild(fNametitle);
tHead.appendChild(lNameTitle)
tHead.appendChild(locationCellTitle);
tHead.appendChild(ageCellTitle)

table.appendChild(tHead);

studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    lastNameCell.textContent = student.lastName;
    ageCell.textContent = student.age;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell)
    row.appendChild(locationCell);
    row.appendChild(ageCell)
    

    table.appendChild(row);
});
const cells = table.querySelectorAll("td, th");
cells.forEach(cell => {
    cell.style.border = "1px solid black";
    cell.style.padding = "8px";
});

/*Append the table to the document body*/
document.body.appendChild(table);



