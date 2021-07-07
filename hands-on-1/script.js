let tbl = document.createElement("table");
let tblDiv = document.getElementById("tblDiv");
let tblBody = document.createElement("tbody");
tbl.style.border = '1px solid black';

const students = [{
        name: "Alice",
        age: 20
    },
    {
        name: "Bob",
        age: 21
    },
    {
        name: "Jane",
        age: 20
    }
];


tableCreate = () => {
    for (let i = 0; i < students.length; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let cellText = document.createTextNode(
            students[i].name + " - " + students[i].age
        );
        cell.appendChild(cellText);
        row.appendChild(cell);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    tblDiv.appendChild(tbl);
}

calculateAverage = () => {
    const total = students.reduce((acc, students) => acc + students.age, 0);
    const wait = time => new Promise((resolve) => setTimeout(resolve, time));
    async function asyncAwait() {
        console.log("calculation start");
        await wait(2000);
        console.log("second call started");
        await wait(3000);
        console.log("second call finished");
        console.log("third call started");
        console.log("the average age is " + total / students.length)
        let averageAge = document.getElementById("averageAge");
        averageAge.innerHTML = total / students.length;
        await wait(5000);
        console.log("third call finished");
    }
    asyncAwait();
}