import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
import Router from './Router';

class App extends Component {
    // state = {}
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA7hZMWZGiSxBj9lWTMG-ltQDZEvQcCGes',
            authDomain: 'manager-82b28.firebaseapp.com',
            databaseURL: 'https://manager-82b28.firebaseio.com',
            projectId: 'manager-82b28',
            storageBucket: 'manager-82b28.appspot.com',
            messagingSenderId: '1077040783161'
        });
    }
    render() {
        const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Router />
                </View>
            </Provider>
        );
    }
}

const styles = {
    spinnerStyle: {
        alignSelf: 'center'
    }
};

export default App;