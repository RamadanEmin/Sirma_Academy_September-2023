function movies(commands = []) {
    const moviesObj = {};

    for (let command of commands) {
        let tokens = command.split(' ');
        let movieName = '';

        if (tokens.includes('addMovie')) {
            movieName = tokens.slice(1).join(' ');
            moviesObj[movieName] = ({ name: movieName });
        } else if (tokens.includes('directedBy')) {
            let index = tokens.indexOf('directedBy');
            movieName = tokens.slice(0, index).join(' ');
            let director = tokens.slice(index + 1).join(' ');
            if (moviesObj.hasOwnProperty(movieName)) {
                moviesObj[movieName].director = director;
            }
        } else if (tokens.includes('onDate')) {
            let index = tokens.indexOf('onDate');
            movieName = tokens.slice(0, index).join(' ');
            let date = tokens.slice(index + 1).join(' ');
            if (moviesObj.hasOwnProperty(movieName)) {
                moviesObj[movieName].date = date;
            }
        }
    }
    const fullMovieInfo = Object.values(moviesObj).filter(movie => movie.name && movie.director && movie.date);

    for (const item of fullMovieInfo) {
        console.log(JSON.stringify(item));
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

movies([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
]);