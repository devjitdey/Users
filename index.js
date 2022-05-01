import fetch from "node-fetch";

async function getUser() {

fetch(
    "https://jsonplaceholder.typicode.com/todos"
)
    .then((response) => response.json())
    .then((arr) => {
        var output = arr.filter((data) => data.completed == true)
        console.log(output)
    })
    .catch((err) => console.log(err));
}

getUser();