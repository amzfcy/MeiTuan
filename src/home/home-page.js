/**
 * Created by fanchunyu on 2016/7/29.
 */
'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Alert,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';


import Header from '../component/Header';
import SwiperGrid from '../component/SwiperGrid';
import MenuButton from '../component/MenuButton';
import ActivityButton from '../component/ActivityButton';

import Food from './Food';

let halfWidth = Dimensions.get('window').width/2;

export default class HomePage extends Component {

    // 构造
    constructor(props) {
        super(props);
        this._onMenuClick = this._onMenuClick.bind(this);

        // 初始状态
        this.state = {};
    }

    _onMenuClick(tag) {

        let {navigator} = this.props;

        if(navigator) {
            navigator.push({
                name: "myPage",
                component: tag,
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Header></Header>

                <View style={styles.menuContainer}>
                    <View style={styles.menuView}>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/wdgz.png')}
                            showText={'美食'}
                            tag={Food}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/dyp.png')}
                            showText={'电影'}
                            tag={"Movie"}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/xjk.png')}
                            showText={'酒店'}
                            tag={"Hotel"}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/yxcz.png')}
                            showText={'休闲娱乐'}
                            tag={"Funny"}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/ljd.png')}
                            showText={'外卖'}
                            tag={"Takeout"}
                            onClick={this._onMenuClick}/>
                    </View>
                    <View style={styles.menuView}>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/gd.png')}
                            showText={'自助餐'}
                            tag={'Buffet'}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/wdgz.png')}
                            showText={'KTV'}
                            tag={'Ktv'}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/wdgz.png')}
                            showText={'火车票/机票'}
                            tag={'Ticket'}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/wdgz.png')}
                            showText={'足疗按摩'}
                            tag={'Massage'}
                            onClick={this._onMenuClick}/>
                        <MenuButton
                            renderIcon={require('./../../images/home_icons/wdgz.png')}
                            showText={'周边游'}
                            tag={'Tour'}
                            onClick={this._onMenuClick}/>
                    </View>
                </View>

                <View style={styles.recommendContainer}>
                    <TouchableWithoutFeedback style={styles.recommendLeft}>
                        <View style={styles.recommendLeftCon}>
                            <Image source={require('../../images/home_icons/wdgz.png')}/>
                            <Text>限时抢购</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.recommendRight}>
                        <TouchableWithoutFeedback style={styles.recommendRT}>
                            <View style={styles.recommendRTCon}>
                                <ActivityButton
                                    renderIcon={require('../../images/home_icons/cz.png')}
                                    showTitle={'天天特价'}
                                    titleColor={'#ff8061'}
                                    tag={'RecommendOne'}
                                    showText={'一折抢购嗨不停'}
                                    onClick={this._onMenuClick}/>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback style={styles.recommendRB}>
                            <View style={styles.recommendRBCon}>
                                <ActivityButton
                                    renderIcon={require('../../images/home_icons/dyp.png')}
                                    showTitle={'超值外卖'}
                                    titleColor={'#ff3413'}
                                    showText={'折扣菜1折起'}
                                    tag={'RecommendTwo'}
                                    onClick={this._onMenuClick}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <View style={styles.activityContainer}>
                    <View style={{borderRightWidth: 1, borderRightColor: '#efefef', width: halfWidth}}>
                        <ActivityButton
                            renderIcon={require('../../images/home_icons/wdgz.png')}
                            showTitle={'火热半价吃'}
                            titleColor={'#ff9900'}
                            showText={'暑期红包人人有'}
                            tag={'ActivityOne'}
                            onClick={this._onMenuClick}/>
                    </View>
                    <View style={{flex: 1}}>
                        <ActivityButton
                            renderIcon={require('../../images/home_icons/wdgz.png')}
                            showTitle={'天天满减'}
                            titleColor={'#f6687d'}
                            showText={'每天都有新优惠'}
                            tag={'ActivityTwo'}
                            onClick={this._onMenuClick} />
                    </View>
                </View>
                <View style={styles.activityContainer}>
                    <View style={{borderRightWidth: 1, borderRightColor: '#efefef', width: halfWidth}}>
                        <ActivityButton
                            renderIcon={require('../../images/home_icons/wdgz.png')}
                            showTitle={'一分钱速抢'}
                            titleColor={'#6bbd00'}
                            showText={'顶级亲子度假村'}
                            tag={'ActivityThree'}
                            onClick={this._onMenuClick}/>
                    </View>
                    <View style={{flex: 1}}>
                        <ActivityButton
                            renderIcon={require('../../images/home_icons/wdgz.png')}
                            showTitle={'封神传奇'}
                            titleColor={'#06c1ae'}
                            showText={'14.9元起观影'}
                            tag={'ActivityFour'}
                            onClick={this._onMenuClick} />
                    </View>
                </View>
                <View style={[styles.activityContainer, {borderBottomWidth: 1,borderBottomColor: '#eee',}]}>
                    <View style={{borderRightWidth: 1, borderRightColor: '#efefef', width: halfWidth}}>
                        <ActivityButton
                            renderIcon={require('../../images/home_icons/wdgz.png')}
                            showTitle={'出国省1000'}
                            titleColor={'#ff8061'}
                            showText={'领75元红包'}
                            tag={'ActivityFive'}
                            onClick={this._onMenuClick}/>
                    </View>
                    <View style={{flex: 1}}>
                        <ActivityButton
                        renderIcon={require('../../images/home_icons/wdgz.png')}
                        showTitle={'0元过暑假'}
                        titleColor={'#7687f1'}
                        showText={'送高温福利'}
                        tag={'ActivitySixs'}
                        onClick={this._onMenuClick} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex:1
    },
    menuContainer: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 10
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    },
    recommendContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 10
    },
    recommendLeft: {

    },
    recommendLeftCon: {
        width: halfWidth,
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#efefef'
    },
    recommendRight: {
        flex: 1,
    },
    recommendRT: {
    },
    recommendRTCon: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef'
    },
    recommendRB: {
    },
    recommendRBCon: {
        flex: 1
    },
    activityContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
}