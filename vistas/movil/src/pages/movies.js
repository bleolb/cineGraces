import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, AsyncStorage, Image } from 'react-native';
import { Link } from "react-router-native";
import { Card } from 'react-native-elements';
import axios from 'axios';

const API = "http://192.168.1.23:5000/film/pelicula";


export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
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

    asyncstorageSave = async (idpelicula) => {
        try {
          await AsyncStorage.setItem('idpelicula', idpelicula.toString())
        } catch (err) {
          alert(err)
        }
    }

    render() {
        const { peliculas } = this.state
        return ( 
            <ImageBackground style = { styles.container } source = { require('../../assets/bg.jpg') } >
                <View style = { styles.overlayContainer } >
                    <View style = { styles.top } >
                        <Text style = { styles.header } > ESTRENOS </Text>   
                    </View >

                    <ScrollView vertical = { true } > 
                    {
                        peliculas.map(element =>
                            <Link to = "/movie_detail" key = { element.id } onPress={ () => this.asyncstorageSave(element.id) }>
                                <Card title = { element.titulo } image={{uri:`${element.imagen}`}}/>
                        
                            </Link >
                        )
                    } 
                    </ScrollView>  
                </View > 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: -1,
        width: '100%',
        height: '100%',
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
        fontSize: 28,
        borderRadius: 50,
        borderColor: 'blue',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)',
    },
    menuContainer: {
        height: '90%',
    }
})