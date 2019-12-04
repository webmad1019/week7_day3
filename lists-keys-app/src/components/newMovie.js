import React, { Component } from 'react';

import './styles/form.css'

class AddMovie extends Component {

    constructor(props) {

        super(props)

        this.state = {
            title: '',
            director: '',
            oscar: false,
            rating: '',
            description: '',
            genre: ''
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.includeMovie(this.state)
    }

    handleChange = e => {
        let { name, value } = e.target
        if (name == 'oscar') value = e.target.checked
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <label htmlFor='input1'>Título</label>
                    <input name='title' type='text' className='form-control' id='input1' value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='input2'>Director</label>
                    <input name='director' type='text' className='form-control' id='input2' value={this.state.director} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='input3'>Rating</label>
                    <input name='rating' type='number' className='form-control' id='input3' value={this.state.rating} onChange={this.handleChange} />
                </div>
                <div className='form-group'>
                    <label>Tiene oscars
                        <input name='oscar' type='checkbox' className='form-control' checked={this.state.oscar} onChange={this.handleChange} />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor='input5'>Descripción</label>
                    <textarea name='description' className='form-control' id='input5' value={this.state.description} onChange={this.handleChange}></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='input6'>Género</label>
                    <select name='genre' className="form-control" id='input6' onChange={this.handleChange}>
                        <option value='terror'>Terror</option>
                        <option value='drama'>Drama</option>
                        <option value='hot'>Hot</option>
                    </select>
                </div>
                <button type='submit' className='btn btn-dark'>Crear nueva película</button>
            </form>
        )
    }
}

export default AddMovie;