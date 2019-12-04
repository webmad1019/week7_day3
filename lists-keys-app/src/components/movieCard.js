import React from 'react';

import './styles/movie.css'

const movieCard = ({ title, director, genre, description, oscar, deleteMovie }) => {


    return (
        <article className="col-md-6 movie">
            <h4>{title}</h4>
            <p>Director: {director}</p>
            <p>Género: {genre}</p>
            <p>Descriptión: {description}</p>

            {/* oscar ? <p>¡Tiene Oscar!</p> : <p>ops! Looser total</p> */}
            {oscar && <p>¡Tiene Oscar!</p>}
            {!oscar && <p>ops! Looser total</p>}

            <button onClick={deleteMovie} className="btn btn-sm btn-dark">Eliminar película</button>
        </article>
    )
};

export default movieCard