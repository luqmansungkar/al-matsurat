import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Slider,
    AsyncStorage,
  } from 'react-native';

export default class Setting extends Component{
    constructor(props){
        super(props);
        this.state = {
            arabicSize: 35,
            terjemahSize: 25
        }
        AsyncStorage.getItem('arabicSize').then((val) => {
            this.setState({ arabicSize: isNaN(parseInt(val)) ? 35 : parseInt(val) });
        }).done();
        AsyncStorage.getItem('terjemahSize').then((val) => {
            this.setState({ terjemahSize: isNaN(parseInt(val)) ? 35 : parseInt(val) });
        }).done();
    }

    updateArabic = (val) => {
        this.setState({arabicSize: val});
        AsyncStorage.setItem('arabicSize', ""+val);
    }

    updateTerjemah = (val) => {
        this.setState({terjemahSize: val});
        AsyncStorage.setItem('terjemahSize', ""+val);
    }

    render(){
        return(
            <Image source={require('newAlmatsurat/assets/img/tiledback3.png')} style={styles.bgImage} collapsable={false} >
                <View style={styles.pageContent}>
                    <View >
                        <Text style={styles.sectionTitle} >Ukuran huruf Arab</Text>
                        <Slider minimumValue={25} maximumValue={50} step={1} value={this.state.arabicSize} onValueChange={this.updateArabic} />
                        <View style={styles.sampleRow}>
                            <Text style={styles.fontSize}>{this.state.arabicSize}</Text>
                            <Text style={[styles.sampleText, {fontSize: this.state.arabicSize, fontFamily: 'utsmani',}]}>اَللَّهُ</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sectionTitle} >Ukuran huruf terjemah</Text>
                        <Slider minimumValue={20} maximumValue={40} step={1} value={this.state.terjemahSize} onValueChange={this.updateTerjemah} />
                        <View style={styles.sampleRow}>
                            <Text style={styles.fontSize}>{this.state.terjemahSize}</Text>
                            <Text style={[styles.sampleText, {fontSize: this.state.terjemahSize}]}>Allah</Text>
                        </View>
                    </View>
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
        marginLeft: 40,
        marginRight: 40,
        marginTop:40,
        // backgroundColor: 'red',
    },
    sectionTitle:{
        color: 'black',  
        fontSize: 28, 
    },
    sampleRow:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    fontSize: {
        color: 'black',  
        fontSize: 30,
        // backgroundColor: 'blue',
        // textAlign: 'center',
        textAlignVertical: 'center'
    },
    sampleText: {
        color: 'black',  
        // fontSize: 20,
        // backgroundColor: 'red',    
    }
});