
// 1. Basic Types
interface student {
	FirstName: string;
	LastName: string;
	Age: number;
	Locations: string[];
}

// 2. Object
let student1: student = {
	FirstName: "John",
	LastName: "Doe",
	Age: 25,
	Locations: ["USA", "UK"]
};

let student2: student = {
	FirstName: "Jane",
	LastName: "Doe",
	Age: 22,
	Locations: ["USA"]
};

// 3. Array
let studenList: student[] = [student1, student2];

document.addEventListener('DOMContentLoaded', function () {
	const table = document.createElement("table");

	const headerRow = table.insertRow();
	const headerCellName = ["Firstname", "Location"];
	headerCellName.forEach((element) => {
		const cell = document.createElement("th");
		cell.textContent = element;
		headerRow.appendChild(cell);
	});

	studenList.forEach((student) => {
		const row = table.insertRow();
		const cell1 = row.insertCell();
		const cell2 = row.insertCell();
		cell1.textContent = student.FirstName;
		cell2.textContent = student.Locations.join(", "); // Fix: Join the elements of the Locations array into a single string
	});
});
