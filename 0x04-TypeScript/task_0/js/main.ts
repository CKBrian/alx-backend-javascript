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
document.body.appendChild(document.createElement("h1")).textContent = "Welcome to Task 0 Students Table";

studentsList.forEach(student => {
  const tHead = document.createElement("tr");
  const row = document.createElement("tr");
  for (const key in student) {
    if (student.hasOwnProperty.call(student, key)) {
      //heading row
      tHead.appendChild(document.createElement("th")).textContent = key
      //rows
      const element = student[key];
      const cell = document.createElement("td");
      row.appendChild(cell).textContent = element
    }
  }
    /*Append the rows to the tables*/ 
    table.appendChild(tHead);
    table.appendChild(row);
});
const cells = table.querySelectorAll("td, th");
cells.forEach(cell => {
    cell.style.border = "1px solid black";
    cell.style.padding = "8px";
});

/*Append the table to the document body*/
document.body.appendChild(table);



