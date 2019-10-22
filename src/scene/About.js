import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Linking
  } from 'react-native';
import CommonStyles from '../style/commonStyles'


export default class About extends Component{
    openFlipWebsite() {
        Linking.openURL("https://flip.id");
    }


    render() {
        return (
            <Image source={require('newAlmatsurat/assets/img/tiledback3.png')} style={styles.bgImage} collapsable={false} >
                <View style={styles.pageContent}>
                    <Text style={[CommonStyles.blackText, CommonStyles.title]} >Al-Matsurat</Text>
                    <Text style={CommonStyles.blackText} >Al-Matsurat Sughra merupakan kumpulan doa pagi dan petang yang disusun oleh Hasan Al Banna.</Text>
                    <View style={styles.divider} />
                    <Text style={[CommonStyles.blackText, CommonStyles.medium]} >Dibuat oleh: </Text>
                    <Text style={[CommonStyles.blackText, CommonStyles.big]} >Luqman Sungkar</Text>
                    <View style={styles.divider} />
                    <Text style={[CommonStyles.blackText, CommonStyles.medium]} >Mau transfer antar bank GRATIS?</Text>
                    <Text style={[CommonStyles.blackText, CommonStyles.big]} onPress={this.openFlipWebsite} >
                        <Text>Buka </Text>
                        <Text style={styles.link}>https://flip.id </Text>
                    </Text>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    bgImage:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    pageContent:{
        marginLeft: 45,
        marginRight: 40,
        marginTop:40,
    },
    divider: {
        borderBottomColor: '#b3b3b3',
        borderBottomWidth: 1,
        paddingTop: 10,
        marginBottom: 10
    },
    link: {
        color: '#FD6542', 
        textDecorationLine: 'underline'
    }
});