const headers = ["username", "content", "delete"];

const displayResults = (results, headers) => {

    let records = [];
    let resultObj = JSON.parse(results);

    if (Array.isArray(resultObj)) {
        records = records.concat(resultObj);
    } else {
        records.push(resultObj);
    }

    //create table
    let resultTable = document.getElementById("resultTable");
    let tableBody = document.getElementById("resultBody");

    //remove any rows except header
    for (let i = resultTable.rows.length - 1; i > 0; i--) {
        resultTable.deleteRow(i);
    }

    if (tableBody != null) {
        resultTable.removeChild(tableBody);
        tableBody = null;
    }

    tableBody = resultTable.createTBody();

    //create table rows
    records.forEach(value => {
        let row = tableBody.insertRow();

        for (let i = 0; i < headers.length; i++) {
            let cell = row.insertCell();
            if (i < 2) {
                let content = document.createTextNode(value[headers[i]]);
                cell.append(content);
            } else if (headers[i] === "delete") {
                let button = document.createElement('button');
                button.id = value[i]._id;
                button.innerText = "Delete Content";
                button.onclick = buttonHandler;
                button.innerHTML = "Details";
                cell.append(button);
            }
        };
    });
};

const buttonHandler = () => {
    sessionStorage.setItem('userid', event.target.id)
    const userid = sessionStorage.getItem('userid');
    makeRequest("DELETE", path + "" + "").then(resolve => { console.log(resolve) });
}