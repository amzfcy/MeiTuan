/**
 * Created by fanchunyu on 2016/7/28.
 */
'use strict';

import React, {Component} from 'react';

import {
    Image,
    StyleSheet
} from 'react-native';

import FramePage from './frame-page';

export default class SplashScreen extends Component {

    // 构造
    constructor(props) {
        super(props);
        var {navigator} = props;

        setTimeout(()=>{
            navigator.replace({name: 'FramePage', component: FramePage})
        }, 1000);
    }

    render() {
        return (
            <Image source={require('./images/meituan_bg.png')} style={styles.backgroundImage}/>
        )
    }
}

const styles = {
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch'
    }
}