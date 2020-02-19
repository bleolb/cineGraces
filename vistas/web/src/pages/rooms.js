import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import axios from 'axios';

const API = "http://localhost:5000/film/sala";

class Rooms extends Component {
    handleOpenModal (id) { this.setState({ showModal: true, test: id }) }
    handleCloseModal () { this.setState({ showModal: false }) }

    constructor(props) {
        super(props);
        this.state = {
            table_header: {
                nombre: 'Nombre de la Sala',
                descripcion: 'Descripción',
            },
            salas: [],
            nombre: '',
            descripcion: '',
            test: ''
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount() {
        axios.get(API)
        .then(response => {
            this.setState({ salas: response.data.datos })
        })
        .catch(error => {
            console.log(error)
        })
    }

    saveData = e => {
        e.preventDefault()
        this.post = {
            datos: {
                nombre: this.state.nombre,
                descripcion: this.state.descripcion
            }
        }

        if (this.post.datos.nombre === "" ||
            this.post.datos.descripcion === "" 
            ) {
          alert("Complete todos los datos");
        } else {
          axios.post(API, this.post)
          .then(response => {
            if ( response.data.ok === true ) {
                alert("Sala agregada exitosamente")
                window.location.assign("http://localhost:3000/rooms");
            }
          })
          .catch(error => {
            alert(error)
          })
        }
    };

    deleteData = (value) => {
        axios.delete(`${ API }?id=${ value }`, {
            data: { id: value }
        })
        window.location.assign("http://localhost:3000/rooms");
    }

 

    render() {
        const { salas, nombre, descripcion } = this.state
        return(
            <div>
                <Sidebar />,
                <Header />,
                <div className="ml-64">
                    <hr />
                    <main className="my-8">
                        <div className="justify-center my-5 select-none flex">
                            <p className="mt-5 text-center mr-10 text-2xl">Salas</p>
                            <button onClick={ this.handleOpenModal } type="button" className="mr-8 shadow-md no-underline font-black text-2xl rounded-full h-12 w-12 flex items-center justify-center bg-blue-800 text-white text-sm border-blue btn-primary hover:text-blue hover:bg-green-500 focus:outline-none active:shadow-none">
                                <i className="fas fa-plus"></i>
                            </button>
                            <ReactModal isOpen={this.state.showModal} contentLabel="onRequestClose Example" onRequestClose={this.handleCloseModal}
                                className="flex-1 text-white text-center pl-48 py  py-0 my-10 mr-40 ml-64">
                                <div className="leading-loose">
                                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={ this.saveData }>
                                        <p className="text-gray-800 font-medium">Nueva Sala</p>
                                            <div className="mt-2">
                                                <label className="block text-sm text-blue-800" htmlFor="nombre">Nombre</label>
                                                <input className="w-full px-5  py-4 text-blue-900 bg-blue-300 rounded" 
                                                    type="text" 
                                                    placeholder="Ej: Sala 1" 
                                                    name="nombre"
                                                    value={ nombre }
                                                    onChange={ this.changeHandler } 
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <label className="block text-sm text-blue-600" htmlFor="descripcion">Descripción</label>
                                                <input className="w-full px-5  py-4 text-blue-900 bg-blue-300 rounded" 
                                                    type="text" 
                                                    placeholder="Ej: 30"
                                                    name="descripcion"
                                                    value={ descripcion }
                                                    onChange={ this.changeHandler }
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">Guardar</button>
                                            </div>
                                    </form>

                                </div>
                            </ReactModal>       
                        </div>  
                        <div className="px-3 py-4 flex justify-center">
                            <table className="w-full text-md bg-white shadow-md rounded mb-4">
                                <thead className="border-b">
                                    <tr>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.nombre }</th>
                                        <th className="text-left p-3 px-5">{ this.state.table_header.descripcion }</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b hover:bg-green-200 bg-gray-100">
                                        <td>
                                            { salas.map(element => <p className="p-2 px-5" key={ element.id }> {element.nombre} </p>) }
                                        </td>
                                        <td>
                                            { salas.map(element => <p className="p-2 px-5" key={ element.id }> {element.descripcion} </p>) }
                                        </td>
                                        <td>
                                            { salas.map(element => <p className="p-2 px-5" key={ element.id }><button onClick={ () => this.handleOpenModal(element.id) } className="mr-3 text-sm bg-blue-900 hover:bg-blue-900 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button></p> )}
                                        </td>
                                        <td>
                                            { salas.map(element => <p className="p-2 px-5" key={ element.id }><button onClick={ () => this.deleteData(element.id) } className="text-sm bg-red-900 hover:bg-red-900 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Borrar</button></p> )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Rooms;