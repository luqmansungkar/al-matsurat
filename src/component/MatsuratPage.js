import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableNativeFeedback,
  ToastAndroid
} from 'react-native';

export default class MatsuratPage extends Component{
	
    render(){
        let judulSize = 30;
        if(this.props.judul.length > 17){
            judulSize = 20;
        }

		return(
			<Image source={require('newAlmatsurat/assets/img/tiledback3emptycorner.png')} style={styles.bgImage} collapsable={false} >
				<View style={{flex: .07,/* backgroundColor: 'red'*/}} />
				<View style={styles.judulContainer}>
					<View style={styles.judul}>
						<Text style={{fontSize: judulSize, color: '#000647', textAlign: 'center'}}>{this.props.judul}</Text>
					</View>
                    <View style={styles.pengulangan}>
                        <Text style={{fontSize: 20, color: '#000647'}}>{this.props.pengulangan}x</Text>
                    </View>
				</View>
				<ScrollView style={{flex: 1}} contentContainerStyle={styles.ScrollViewContent}>
                    <TouchableNativeFeedback onPress={this.props.onPress} >
                        <Text style={[styles.arabicText, {fontSize: this.props.arabicFontSize}]}>{this.props.arabicText}</Text>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.props.onPress} >
                        <View style={styles.separatorTerjemah}>
                            <Text style={{color: 'white', fontSize: 20}}>Terjemahan</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.props.onPress} >
                        <Text style={[styles.terjemahText, {fontSize: this.props.terjemahFontSize}]}>{this.props.terjemahText}</Text>
                    </TouchableNativeFeedback>
                </ScrollView>
				<View style={{flex: .02/*, backgroundColor: 'red'*/}} />
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
  judulContainer:{
    flex: .13,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  judul:{
  	// flex: 1,
  	width: 245,
  	alignItems: 'center',
  	justifyContent: 'center',
    // paddingBottom: 0
    // paddingLeft: 15,
    marginLeft:20,
  	// backgroundColor: 'pink',
  },
  pengulangan:{
    // flex: 1,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginLeft: 12
  },
  ScrollViewContent:{
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop:10
    // flex: 1,
    // flexDirection: 'column',
    // height: 20,
  },
  separatorTerjemah:{
  	backgroundColor: '#000647', 
  	height: 30, 
  	marginTop: 10, 
  	marginBottom: 10,
	justifyContent: 'center',
	alignItems: 'center',
  },
  arabicText:{
    // color: 'black', 
    fontFamily: 'utsmani',
    // fontSize: 25, 
    textAlign: 'center',
    color: '#000647'
  },
  terjemahText:{
    // color: 'black',  
    // fontSize: 20, 
    textAlign: 'center',
    color: '#000647'

  },
});