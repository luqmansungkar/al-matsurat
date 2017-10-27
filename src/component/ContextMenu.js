import {StyleSheet, Text, Image} from 'react-native';
import React, { Component } from 'react';
import { Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger } from 'react-native-popup-menu';

export default class ContextMenu extends Component{
    render(){
        return(
            <Menu>
                <MenuTrigger>
                    <Image source={require('newAlmatsurat/assets/img/menu.png')} style={styles.rightMenu} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Setting`)} text='Setting' />
                    <MenuOption text='About' onSelect={() => alert(`Delete`)} />
                </MenuOptions>
            </Menu>
        );
    }
}

var styles = StyleSheet.create({
    rightMenu: {
        // backgroundColor: "yellow",
        height: 24,
        resizeMode: 'contain',
        width: 20,
        marginRight: 10
    }
});