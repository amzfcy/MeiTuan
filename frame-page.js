/**
 * Created by fanchunyu on 2016/7/29.
 */

'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Platform,
    Image
} from 'react-native';

let HOME_TAB = 'homeTab';
let HOME_NORMAL = require('./images/icon_home_nor.png');
let HOME_PRESS = require('./images/icon_home_pre.png');

let SHOP_TAB = 'shopTab';
let MESSAGE_NORMAL = require('./images/icon_message_nor.png');
let MESSAGE_PRESS = require('./images/icon_message_pre.png');

let ME_TAB = 'meTab';
let ME_NORMAL = require('./images/icon_user_nor.png');
let ME_PRESS = require('./images/icon_user_pre.png');

let MORE_TAB = 'moreTab';
let DISCOVER_NORMAL = require('./images/icon_find_nor.png');
let DISCOVER_PRESS = require('./images/icon_find_pre.png');

import TabNavigator from 'react-native-tab-navigator';

import ShopPage from './src/page/shop-page';
import MePage from './src/page/me-page';
import MorePage from './src/page/more-page';

import HomePage from './src/home/home-page';

let tabBarHidden = false;

export default class FramePage extends Component {
    // 构造
    constructor(props) {

        super(props);

        this.state = {
            selectedTab: HOME_TAB,
            tabBarShow:true
        };
    }

    _renderBadge(badgeCount) {
        if (!badgeCount) {
            return null;
        }
        return (
            <Image style={styles.badgeBg} source={require('./images/message_num_bg.png')}>
                <Text style={styles.badgeText}>{badgeCount}</Text>
            </Image>
        );
    }

    _renderTabItem(img, selectedImg, tag, title, badgeCount, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab===tag}
                renderIcon={()=><Image style={styles.tabIcon} source={img}/>}
                title={title}
                selectedTitleStyle={styles.selectedTitleStyle}
                renderBadge={()=>this._renderBadge(badgeCount)}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={()=>this.setState({selectedTab:tag})}>
                {childView}
            </TabNavigator.Item>
        );
    }

    _createChildView(tag) {

        let renderView;

        let tabBarShow = this.state.tabBarShow;

        switch (tag) {
            case HOME_TAB:
                renderView = <HomePage {...this.props} tabBarShow = {tabBarShow} />;
                break;
            case SHOP_TAB:
                renderView = <ShopPage />;
                break;
            case ME_TAB:
                renderView = <MePage />;
                break;
            case MORE_TAB:
                renderView = <MorePage />;
                break;
            default:
                break;
        }
        return (<View style={styles.container}>{renderView}</View>)
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        let {tabBarShow} = this.state;

        return(
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch={false}
                    sceneStyle={{paddingBottom: 0}}
                    tabBarStyle={tabBarShow ? styles.tabNav : styles.tabNavHide}>
                    {this._renderTabItem(HOME_NORMAL, HOME_PRESS, HOME_TAB, '首页', 0, this._createChildView(HOME_TAB))}
                    {this._renderTabItem(MESSAGE_NORMAL, MESSAGE_PRESS, SHOP_TAB, '商家', 1, this._createChildView(SHOP_TAB))}
                    {this._renderTabItem(ME_NORMAL, ME_PRESS, ME_TAB, '我的', 0, this._createChildView(ME_TAB))}
                    {this._renderTabItem(DISCOVER_NORMAL, DISCOVER_PRESS, MORE_TAB, '更多', 0, this._createChildView(MORE_TAB))}
                </TabNavigator>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
    },
    tabNav: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#E8E8E8'
    },
    tabNavHide: {
        position: 'absolute',
        top: Dimensions.get('window').height,
        height: 0
    },
    tabIcon: {
        height: 30,
        width: 30,
        resizeMode: 'cover'
    },
    selectedTitleStyle: {
        color: '#11A984'
    },
    badgeBg: {
        width: 14,
        height: 14,
        marginTop: 6
    },
    badgeText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 10,
        backgroundColor: Platform.OS === 'android' ? null : 'transparent'
    },
}