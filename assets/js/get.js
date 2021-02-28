async function getData(url) {
    const response = await fetch(url, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) throw Error(response.statusText);

    return response.json();
}

getData('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
