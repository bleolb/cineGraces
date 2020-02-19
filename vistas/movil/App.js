import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";

import Movies from './src/pages/movies';
import MovieDetail from './src/pages/movie_detail';
import BuyTickets from './src/pages/buy_tickets';

export default class App extends Component {
    render() {
        return ( 
            <NativeRouter >
                <View style = { styles.container } >
                    <Switch >
                        <Route exact path = "/" component = { Movies } /> 
                        <Route exact path = "/movie_detail" component = { MovieDetail } /> 
                        <Route exact path = "/buy_tickets" component = { BuyTickets } /> 
                    </Switch > 
                </View> 
            </NativeRouter >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});