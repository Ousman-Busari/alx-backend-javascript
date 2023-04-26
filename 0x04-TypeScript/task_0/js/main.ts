interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

const s1: Student = {
    firstName: 'Usman',
    lastName: 'Busari',
    age: 27,
    location: 'Ile-ife'
}

const s2: Student = {
    firstName: 'Adebayo',
    lastName: 'Sanusi',
    age: 31,
    location: 'Lagos'
}

const studentList: Student[] = [s1, s2]

const table: HTMLTableElement = document.createElement('table');

document.body.appendChild(table)
const tHead: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = tHead.insertRow();
const colHead1:  HTMLTableCellElement = row.insertCell(0)
const colHead2:  HTMLTableCellElement = row.insertCell(1)
colHead1.innerHTML = '<b>First Name</b>'
colHead2.innerHTML = '<b>Location</b>'

const tBody: HTMLTableSectionElement = table.createTBody()
studentList.forEach(student => {
    const newRow: HTMLTableRowElement = tBody.insertRow()
    const firstName: HTMLTableCellElement = newRow.insertCell()
    const location: HTMLTableCellElement = newRow.insertCell()
    firstName.innerHTML = student.firstName
    location.innerHTML = student.location
})