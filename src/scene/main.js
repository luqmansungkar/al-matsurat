import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import MatsuratPager from '../container/MatsuratPager.js';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            arabicSize: 35,
            terjemahSize: 25
        };
    }

    componentDidMount(){
        this._refreshState();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.arabicSize == this.state.arabicSize && nextState.terjemahSize == this.state.terjemahSize){
            return false;
        }
        return true;
    }

    _refreshState(){
        // console.log("refresh state..");
        AsyncStorage.getItem('arabicSize').then((val) => {
            console.log("arabic size is now: "+val);
            this.setState({ arabicSize: isNaN(parseInt(val)) ? 35 : parseInt(val) });
        }).done();
        AsyncStorage.getItem('terjemahSize').then((val) => {
            this.setState({ terjemahSize: isNaN(parseInt(val)) ? 35 : parseInt(val) });
        }).done();
        // console.log("after sync");
    }

    render() {
        return (
            <MatsuratPager
                arabicSize={this.state.arabicSize}
                terjemahSize={this.state.terjemahSize}
             />
        );
    }
}