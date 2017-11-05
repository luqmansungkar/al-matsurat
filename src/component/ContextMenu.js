import {StyleSheet, Text, Image, View} from 'react-native';
import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
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
                <MenuOptions customStyles={styles}>
                    <MenuOption onSelect={() => Actions.setting()} text='Pengaturan' />
                    <View style={styles.divider} />
                    <MenuOption text='Tentang' onSelect={() => Actions.about()} />
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
    },
    optionText: {
        color: 'black',
        fontSize: 20
    },
    optionWrapper: {
        paddingLeft: 10
    },
    divider: {
        borderBottomColor: '#dfe2e5',
        borderBottomWidth: 1,
    }
});