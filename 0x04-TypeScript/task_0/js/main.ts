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

