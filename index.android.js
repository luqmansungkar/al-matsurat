/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/root.js';
import {AdMobInterstitial} from 'react-native-admob';

AdMobInterstitial.setAdUnitID('ca-app-pub-9892199782124785/7700771211');

AppRegistry.registerComponent('newAlmatsurat', () => Root);
