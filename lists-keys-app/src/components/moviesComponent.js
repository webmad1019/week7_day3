import React, { Component } from 'react'

import MovieCard from './movieCard'
import NewMovieForm from './newMovie'

class List extends Component {
    constructor() {
        super()
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", oscar: true, rating: 6, description: 'ighubiuy biubiubfyufb uybfk', genre: 'hot' },
                { title: "Sharknado", director: "Francis Coppola", oscar: false, rating: 2, description: 'khsg isuyg siuyg iysg ', genre: 'drama' },
                { title: "Campamento Flippy", director: "Almodóvar", oscar: true, rating: 5, description: 'ljsh ouhsu siuh soi', genre: 'terror' },
                { title: "Star Wars", director: "Rian Johnson", property: true, rating: 8.7, description: 'sss ljkhs ihs iuhssi gsi', genre: 'terror' },
                { title: "The Shawshank Redemption", director: "Frank Darabont", property: false, rating: 9.3, description: 'ouish ihgs igsi gsi', genre: 'terror' }
            ]
        }
    }

    deleteMovieHandler = id => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(id, 1)
        this.setState({ movies: moviesCopy })
    }

    addNewMovie = movie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(movie)
        this.setState({ movies: moviesCopy })
    }


    render() {

        return (
            <>

                <div className="container">

                    <div className="row justify-content-around">

                        <div className="col-md-7">      {/* Columnas anidadas */}

                            <div className="row">

                                <h2>Listado dinámico de películas</h2>
                                {this.state.movies.map((movie, idx) => <MovieCard key={idx} {...movie} deleteMovie={() => this.deleteMovieHandler(idx)} />)}

                            </div>

                        </div>

                        <div className="col-md-4">

                            <h2>Formulario de nueva película</h2>
                            <NewMovieForm includeMovie={this.addNewMovie} />

                        </div>

                    </div>

                </div>
            </>
        )
    }
}


export default List