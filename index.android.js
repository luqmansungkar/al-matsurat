/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/root.js';
import {AdMobInterstitial} from 'react-native-admob';

AdMobInterstitial.setAdUnitID('');

AppRegistry.registerComponent('newAlmatsurat', () => Root);
