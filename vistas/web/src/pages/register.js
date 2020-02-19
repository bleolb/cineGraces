import React, { Component } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000/film/persona";

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      correo: '',
      clave: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  registerUser = e => {
    e.preventDefault()
    this.post = {
      datos: {
          nombre: this.state.nombre,
          correo: this.state.correo,
          clave: this.state.clave,
      }
  }
    if (this.post.datos.nombre === "" || this.post.datos.correo === "" || this.post.datos.clave === "") {
      alert("Complete todos los datos para continuar...");
    } else {
      axios.post(API_URL, this.post)
      .then(response => {
        if ( response.data.ok === true ) {
          alert("Usuario registrado correctamente")
          window.location.assign("http://localhost:3000/");
        }
      })
      .catch(error => {
        alert("Datos Incorrectos")
      })
    }
  };

  render() {
    const { nombre, correo, clave } = this.state
    return (
      <div className="container mx-auto">
      <div className="cflex justify-center px-12 my-12">
        <div className="w-full xl:w-3/4 xl:w-11/12 flex">
          <h3 className="pt-4 text-2xl text-center">Registrate</h3>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <form className="px-10 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={this.registerUser}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Nombre</label>
                <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ej: Paul"
                  name="nombre"
                  value={nombre}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Correo Electrónico</label>
                <input className="-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="correo@gmail.com"
                  name="correo"
                  value={correo}
                  onChange={this.changeHandler}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">Contraseña</label>
                <input className="-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="********"
                  name="clave"
                  value={clave}
                  minLength="6"
                  onChange={this.changeHandler}
                  securetextentry="true"
                />
              </div>

              <div className="mb-6 text-center">
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                  Registrarse
                </button>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a href="http://localhost:3001/" className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded">
                    Regresar
                </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Register;
