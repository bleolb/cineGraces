import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:5000/film/pelicula";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        }
    }

    componentDidMount() {
        axios.get(API)
        .then(response => {
            this.setState({ peliculas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/movies");
    }

    render() {
        const { peliculas } = this.state
        const image_cover = require('../assets/cartelera.jpg');
        const image_categorie = require('../assets/eye.png');

        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <p className="text-center my-5 text-2xl">Cartelera</p>
                        <div className="flex flex-wrap items-center justify-center">
                        { peliculas.map(element => 
                            <div className="max-w-md w-full lg:flex" key={ element.id }>
                                <img className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={ element.imagen } alt="image_cover" />
                                <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-black font-bold text-xl mb-2">Título: { element.titulo }</div>
                                        <p className="text-grey-darker text-base">Resumen: { element.resumen }</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src={ image_categorie } alt="image_categorie" />
                                        <div className="text-sm">
                                            <p className="text-black leading-none">{ element.categoria }</p>
                                            <p className="text-grey-dark">Valor: $ { element.valorBoleto }</p>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                    </div>
                                    <div className="m-3">
                                        <button className="bg-white text-gray-800 font-bold rounded  hover:bg-blue-800 hover:text-blue shadow-md py-2 px-6 inline-flex items-center"
                                            onClick={ () => this.deleteData(element.id) }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="currentcolor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                                            </svg>
                                            <span className="mr-2">Eliminar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) }
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Movies;