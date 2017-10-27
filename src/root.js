import {Scene, Router, Stack} from 'react-native-router-flux';
import React, { Component } from 'react';
import Main from './scene/main.js';
import Setting from './scene/Setting.js';
import {StyleSheet, Text, Image} from 'react-native';
import ContextMenu from './component/ContextMenu.js';
import { MenuContext } from 'react-native-popup-menu';

export default class Root extends Component{
    _renderMenu(){
        return (
            <ContextMenu />
        );
    }

    render(){
        return(
            <MenuContext style={{flex: 1}}>
                <Router navigationBarStyle={styles.navBar} titleStyle={styles.title}  >
                    <Stack key="root">
                        <Scene 
                            key="main" 
                            component={Main} 
                            title={"Almatsurat"} 
                            renderRightButton={this._renderMenu} />
                        <Scene 
                            key="setting" 
                            component={Setting} 
                            title={"Setting"} />
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