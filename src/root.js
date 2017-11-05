import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import Main from './scene/main.js';
import Setting from './scene/Setting.js';
import About from './scene/About.js';
import {StyleSheet, Text, Image} from 'react-native';
import ContextMenu from './component/ContextMenu.js';
import { MenuContext } from 'react-native-popup-menu';
import {AdMobInterstitial} from 'react-native-admob';

export default class Root extends Component{

    constructor(props){
        super(props);
        this.state = {
            reset: true,
            mounted: false
        };
        AdMobInterstitial.requestAd();
    }

    componentDidMount(){
        this.setState({mounted: true});
    }

    _onEnterMain(){
        console.log("onEnter main");
        // this._refreshState();
        if(this.state.mounted){
            this.setState({reset: true});   
        }
        console.log("after refresh")
    }

    _backHandler(){
        if(Actions.state.index === 0){
            AdMobInterstitial.showAd();
            return false;
        }
        Actions.pop();
        return true;
    }

    _renderMenu(){
        return (
            <ContextMenu />
        );
    }

    render(){
        return(
            <MenuContext style={{flex: 1}}>
                <Router 
                    navigationBarStyle={styles.navBar} 
                    titleStyle={styles.title} 
                    navBarButtonColor="white" 
                    backAndroidHandler={this._backHandler} >
                    <Stack key="root">
                        <Scene 
                            initial={true}
                            key="main" 
                            component={Main} 
                            title={"Al-Matsurat"} 
                            renderRightButton={this._renderMenu}
                            onEnter={this._onEnterMain.bind(this)}
                            onExit={() => console.log("onExit main")} />
                        <Scene 
                            key="setting" 
                            component={Setting} 
                            title={"Pengaturan"}
                            onEnter={() => console.log("onEnter setting")}
                            onExit={() => console.log("onExit setting")} />
                        <Scene 
                            key="about" 
                            component={About} 
                            title={"Tentang"} />
                    </Stack>
                </Router>
            </MenuContext>
        );
    }
}

var styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#000647'
    },
    title: {
        color: "white"
    },
});