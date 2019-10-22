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
				<View style={{flex: .07}} />
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
				<View style={{flex: .02}} />
			</Image>
		);
	}
}

var styles = StyleSheet.create({
  bgImage:{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  judulContainer:{
    flex: .13,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  judul:{
  	width: 245,
  	alignItems: 'center',
  	justifyContent: 'center',
    marginLeft:20,
  },
  pengulangan:{
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12
  },
  ScrollViewContent:{
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop:10
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
    fontFamily: 'utsmani',
    textAlign: 'center',
    color: '#000647'
  },
  terjemahText:{
    textAlign: 'center',
    color: '#000647'

  },
});