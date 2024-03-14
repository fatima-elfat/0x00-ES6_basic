export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentOne: Student = {
  firstName: "Robin",
  lastName: "Nico",
  age: 32,
  location: "Ohara",
};
const studentTwo: Student = {
  firstName: "Ilgaz",
  lastName: "Kaya",
  age: 42,
  location: "Istanbul",
};
const studentsList: Student[] = [
  studentOne,
  studentTwo,
];
const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const tableHead1: HTMLTableHeaderCellElement = row.insertCell(0);
const tableHead2: HTMLTableHeaderCellElement = row.insertCell(1);
tableHead1.innerHTML = ("<b>First Name</b>");
tableHead1.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
for (const student of studentsList) { 
  const newL: HTMLTableRowElement = body.insertRow();
  const name: HTMLTableCellElement = newL.insertCell();
  name.innerHTML = student.firstName;
  const location: HTMLTableCellElement= newL.insertCell();
  location.innerHTML = student.location;
}
