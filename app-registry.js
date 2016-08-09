/**
 * Created by fanchunyu on 2016/7/28.
 */
'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator
} from 'react-native';

import SplashScreen from './splash-page';

class MeiTuan extends Component {

    render() {

        var defaultName = 'Splash';
        var defaultComponent = SplashScreen;

        return (
            <Navigator

                initialRoute={{name: defaultName, component: defaultComponent}}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        )
    }
}

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);