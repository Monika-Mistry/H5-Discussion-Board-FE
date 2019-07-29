function getAllItems() {
    makeRequest("GET", path + "storage/order").then(value => {
        const container = document.getElementById('resultTable');
       
        if (container.rows.length > 1) {
            let tableSize = container.rows.length;
            for (let j = tableSize; j > 1; j--) {
                container.deleteRow(j - 1);
            }
        }
        for (let i = 0; i < value.length; i++) {
            console.log(value[i]._id);
            let myRow = document.createElement('tr');
            container.appendChild(myRow);
            let myUsername = document.createElement('td');
            myUsername.innerHTML = value[i].username;
            let myMessage = document.createElement('td');
            myMessage.innerHTML = value[i].message;
            myRow.appendChild(myUsername);
            myRow.appendChild(myMessage);
            let detail = document.createElement('td');
            let detailButton = document.createElement('button');
            detailButton.id = value[i]._id;
            detailButton.innerText = "Delete";
            detailButton.type = "button";
            detailButton.className = "btn btn-dark myBtn";
            detailButton.onclick = detailButtonHandler;
            detail.innerHTML = detailButton;
            myRow.appendChild(detailButton);
        }
    })
        .catch((error) => console.log(error.message));
    return false;
 }
 const detailButtonHandler = () => {
        sessionStorage.setItem('userid', event.target.id)
        const userid = sessionStorage.getItem('userid');
        const test = {
            _id: userid
        }

        makeRequest("DELETE", path + "storage/deleteItem", JSON.stringify(test) ).then(resolve => { console.log(resolve) });
        
 }
