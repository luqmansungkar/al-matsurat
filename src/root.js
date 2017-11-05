import {Scene, Router, Stack} from 'react-native-router-flux';
import React, { Component } from 'react';
import Main from './scene/main.js';
import Setting from './scene/Setting.js';
import About from './scene/About.js';
import {StyleSheet, Text, Image} from 'react-native';
import ContextMenu from './component/ContextMenu.js';
import { MenuContext } from 'react-native-popup-menu';

export default class Root extends Component{

    constructor(props){
        super(props);
        this.state = {
            reset: true,
            mounted: false
        };
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
                    navBarButtonColor="white"  >
                    <Stack key="root">
                        <Scene 
                            initial={true}
                            key="main" 
                            component={Main} 
                            title={"Almatsurat"} 
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