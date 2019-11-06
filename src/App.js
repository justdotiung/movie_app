import React, {Component}  from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component{
  //render componentWillMount() > render() >   componentDidMount()
  state = {}
  componentDidMount(){
    this._movieData();
  }
  _movieData = async () =>{
    const movie = await this._callApi();
    this.setState({
      //movies는 renderMovies movie는 변수이다.
      movies : movie
    })
  }
  _callApi = () =>{
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis} />
    });
    return movies;
  }
  render(){
    const {movies} =this.state;
    return (
      <div className={movies ? "App": "App--loading"}>
        {/* i 는 key 가된다. */}
        {this.state.movies ? this._renderMovies() : "Loding"}
      </div>
    );
  }
}

export default App;
