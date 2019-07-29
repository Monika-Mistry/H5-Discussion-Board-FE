const getAll ="";
const getAllItems = () => {
    makeRequest("GET", getAll).then(res => {
        let items = [];
        let resObj = JSON.parse(res);
        resObj.forEach(element => {
            items.push(itemMaker(element))
        });

        displayResults(JSON.stringify(items));

    }).catch(err => console.log(err));
}

const itemMaker = item => {
    return {
        _id: item[0],
        username: item[1],
        content: item[2]
    }
}