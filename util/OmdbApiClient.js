
import { REACT_APP_API_KEY } from 'react-native-dotenv'

const apiUrl = `http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}`

const parseMovie = (movie) => ({
    imdbID: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
})

const findByTitle = async (title) => {
    const queryTitle = title? `&s=${title}`: '';
    const response = await fetch(apiUrl + queryTitle);
    const json = await response.json();
    return json.Search
}

const findById = async (id) => {
    console.log(id)
    const queryId = id? `&i=${id}`: '';
    const response = await fetch(apiUrl + queryId);
    const json = await response.json();
    console.log(json);
    return json;
}

export {findById, findByTitle}