
let searchLast = ' ';

const getData = (url) => fetch(url)
.then((response) => response.json())
.then((json) => {  
    if (!json || !json.Search) throw Error('Server returns incorrect object');

    return json.Search;
});

inputSearch.addEventListener('keyup', (e) => {

    delay(() => {
        const searchString = e.target.value;

        if (searchLast && searchString.length > 3 && searchString !== searchLast) {
            if (!triggerMode) clearMoviesMarkup();

            getData(`http://www.omdbapi.com/?apikey=c3568c96&s=${searchString}`)
            .then((movies) => movies.forEach((movie) => addMovieToList(movie)))
            .catch((err) => console.log(err));
        }

        searchLast = searchString;

    }, 1000);

});






// const search1 = 'Iron man';
// const search2 = 'Batman';
// const search3 = 'Spider man';

// const ironman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=c3568c96&s=${search1}`);
// const batman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=c3568c96&s=${search2}`);
// const spiderman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=c3568c96&s=${search3}`);

// ironman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));
// batman.then((movies) => movies.forEach((movie) => addMoieToList(movie)));
// superman.then((movies) => movies.forEach((movie) => addMovieToList(movie)));

// Promise.all([ironman, batman, spiderman])
// .then((res) => res.forEach((movies) => movies.forEach((movie) => addMovieToList(movie))))

