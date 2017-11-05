import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Linking
  } from 'react-native';


export default class About extends Component{

    render(){
        return (
            <Image source={require('newAlmatsurat/assets/img/tiledback3.png')} style={styles.bgImage} collapsable={false} >
                <View style={styles.pageContent}>
                    <Text style={{
                        color: 'black',
                        fontSize: 30
                    }} >Al-Matsurat</Text>
                    <Text style={{color: 'black'}} >Al-Matsurat Sughra merupakan kumpulan doa pagi dan petang yang disusun oleh Hasan Al Banna.</Text>
                    <View style={styles.divider} />
                    <Text style={{color: 'black', fontSize: 20}} >Dibuat oleh: </Text>
                    <Text style={{color: 'black', fontSize: 25}} >Luqman Sungkar</Text>
                    <View style={styles.divider} />
                    <Text style={{color: 'black', fontSize: 20}} >Mau transfer antar bank GRATIS?</Text>
                    <Text style={{color: 'black', fontSize: 25}} onPress={() => Linking.openURL("https://flip.id")} >
                        <Text>Buka </Text>
                        <Text style={{color: '#FD6542', textDecorationLine: 'underline'}}>https://flip.id </Text>
                    </Text>
                </View>
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
    pageContent:{
        marginLeft: 45,
        marginRight: 40,
        marginTop:40,
        // backgroundColor: 'red',
    },
    divider: {
        borderBottomColor: '#b3b3b3',
        borderBottomWidth: 1,
        paddingTop: 10,
        marginBottom: 10
    }
});