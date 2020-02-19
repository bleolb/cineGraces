import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableHighlight, ScrollView, AsyncStorage,image} from 'react-native';
import { Card } from 'react-native-elements';
import { Link } from "react-router-native";
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

const API = "http://192.168.1.23:5000/film/";


export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: '',
      pelicula: [],
      sala_peliculas: [],
      //
      idpelicula: '',
    };
  }

  getData = () => {
    axios.get(`${ API }pelicula?id=${ this.state.idpelicula }`)
    .then(response => {
      this.setState({ pelicula: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  
    axios.get(`${ API }raw2?idpelicula=${ this.state.idpelicula }`)
    .then(response => {
      this.setState({ sala_peliculas: response.data.datos })
    })
    .catch(error => {
      console.log(error)
    })
  }

  asyncstorageSave_idsala_peliculas = async (id) => {
    try {
      await AsyncStorage.setItem('idsala_peliculas', id.toString())
    } catch (err) {
      alert(err)
    }
  }

  asyncstorageSave_idpelicula_titulo = async (item) => {
    try {
      await AsyncStorage.setItem('idpelicula_titulo', item.toString())
    } catch (err) {
      alert(err)
    }
  }

  asyncstorageSave_idhorario_hora = async (item) => {
    try {
      await AsyncStorage.setItem('idhorario_hora', item.toString())
    } catch (err) {
      alert(err)
    }
  }

  asyncstorageSave_idsala_nombre = async (item) => {
    try {
      await AsyncStorage.setItem('idsala_nombre', item.toString())
    } catch (err) {
      alert(err)
    }
  }

  asyncstorageGet = async () => {
    try {
      const idfilm = await AsyncStorage.getItem('idpelicula')
      this.setState({idpelicula: idfilm})
      this.getData()
    } catch (e) {
      alert(e)
    }
  }

  asyncstorageClear = async () => {
    try {
      await AsyncStorage.clear()
      this.setState({ idpelicula: '' })
    } catch (e) {
      alert(e)
    }
  }

  componentDidMount() {
    this.asyncstorageGet()
  }

  render() {
    const { pelicula, sala_peliculas, checked } = this.state
    return(
      <ImageBackground style={ styles.container } source={ require('../../assets/bg.jpg') }>
        <View style={ styles.overlayContainer}>
          <View style={ styles.top }>
            <Text style={ styles.header }>DETALLE DE LA PELÍCULA</Text>
          </View>

          <ScrollView vertical={true}>
            { pelicula.map( element => 
              <Card key={ element.id } title={ element.titulo } image={{uri:`${element.imagen}`}}>
                <Text style={{marginBottom: 10}}>
                  Resumen: { element.resumen }
                </Text>
                <Text style={{marginBottom: 10}}>
                  Categoría: { element.categoria }
                </Text>
                <Text style={{marginBottom: 10}}>
                  Valor de Boleto: { element.valorBoleto }
                </Text>
              </Card>
              )
            }

            <Card title="Horarios Disponibles" >
              { sala_peliculas.map( element => 
                <View key={ element.id }>
                  <Text>Horario: { element.idhorario_hora }</Text>
                  <Text>Sala: { element.idsala_nombre }</Text>
                  <RadioButton value={ element.id }
                    status={checked === element.id ? 'checked' : 'unchecked'}
                    onPress={() => { 
                      this.setState({ checked: element.id }), 
                      this.asyncstorageSave_idsala_peliculas(element.id), 
                      this.asyncstorageSave_idpelicula_titulo(element.idpelicula_titulo),
                      this.asyncstorageSave_idhorario_hora(element.idhorario_hora),
                      this.asyncstorageSave_idsala_nombre(element.idsala_nombre)
                    }}
                  />
                </View>
                )
              }
            </Card>

            <TouchableHighlight>
              <Link to="/" style={ styles.button } onPress={ () => this.asyncstorageClear() }>
                <Text>Volver</Text>
              </Link>
            </TouchableHighlight>
          
            <TouchableHighlight>
              <Link to="/buy_tickets"  style={ styles.button }>
                <Text>Comprar</Text>
              </Link>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%', 
    height: '100%',
    justifyContent:'center',
    backgroundColor: 'red',
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218, .4)',
  },
  top: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    borderRadius: 50,
    fontSize: 28,
    borderColor: 'blue',
    borderWidth: 2,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .1)',
    textAlign: 'center'
  },
  button: {
    position: 'relative',
    bottom: '-4%',
    marginBottom: 5,
    borderWidth: 2,
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255, .2)',
    borderColor: '#fff',
  },
})