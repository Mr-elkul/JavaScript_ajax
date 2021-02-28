
async function patchData(url, data) {
    console.log(JSON.stringify(data));
    const response = await fetch(url, {
        method: `PATCH`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) throw Error(response.statusText);

    return response.json();
}

patchData('https://jsonplaceholder.typicode.com/posts/1', {
    // title: 'My title text',
    body: 'Description text',
    // userId: 110
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
