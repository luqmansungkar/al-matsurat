import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default class Setting extends Component{
    render(){
        return(
            <Image source={require('newAlmatsurat/assets/img/tiledback3.png')} style={styles.bgImage} collapsable={false} >
            </Image>
        );
    }
}

var styles = StyleSheet.create({
    bgImage:{
        flex: 1,
        // flexDirection: 'column',
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
});