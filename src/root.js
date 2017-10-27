import {Scene, Router, Stack} from 'react-native-router-flux';
import React, { Component } from 'react';
import Main from './scene/main.js';
import {StyleSheet, Text, Image} from 'react-native';
import { MenuContext, Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger } from 'react-native-popup-menu';

export default class Root extends Component{
    _renderMenu(){
        return (
            <Menu>
                <MenuTrigger>
                    <Image source={require('newAlmatsurat/assets/img/menu.png')} style={styles.rightMenu} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => alert(`Delete`)} >
                        <Text style={{color: 'red'}}>Delete</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        );
    }

    render(){
        return(
            <MenuContext style={{flex: 1}}>
                <Router navigationBarStyle={styles.navBar} titleStyle={styles.title} rightButtonIconStyle={styles.rightMenu} >
                    <Stack key="root">
                        <Scene 
                            key="main" 
                            component={Main} 
                            title={"Almatsurat"} 
                            onRight={this._renderMenu}
                            renderRightButton={this._renderMenu}
                            rightButtonImage={require('newAlmatsurat/assets/img/menu.png')}/>
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
    rightMenu: {
        // backgroundColor: "yellow",
        height: 24,
        resizeMode: 'contain',
        width: 20,
        marginRight: 10
    }
});