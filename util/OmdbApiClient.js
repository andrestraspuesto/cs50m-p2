
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
    //console.log(json);
    //const result = json.Search.map(parseMovie);
   // console.log(result)
    return json.Search
}

const findById = async (id) => {
    const queryId = id? `&i=${id}`: '';
    const response = await fetch(apiUrl + queryId);
    const json = await response.json();
    console.log(json.Title);
    return json;
}

export {findById, findByTitle}