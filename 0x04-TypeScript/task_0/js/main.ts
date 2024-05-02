interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: 'samuel',
  lastName: 'Dennis',
  age: 26,
  location: 'lagos',
};

const student2: Student = {
  firstName: 'festus',
  lastName: 'Aliba',
  age: 32,
  location 'Benin',
};

const studentsList: Student[] = [student1, student2];
// Render Table
const table = document.createElement('table');

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContnt = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
