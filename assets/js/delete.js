
async function deleteData(url, data) {
    const response = await fetch(url);

if (response.ok) return true;

    return false;
}

deleteData('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
