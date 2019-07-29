function makePost() {
    let post = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    makeRequest("POST", path + "storage/addItem", JSON.stringify(post)).then(resolve => {
        console.log(resolve)
    });
}

function test() {

    const testPost = {
        username: document.getElementById('username').value
    }
    makeRequest("POST", path + "storage/test", testPost).then(resolve => {
        console.log(resolve)
    });

}