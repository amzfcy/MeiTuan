/**
 * Created by fancy on 16/8/1.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import IconFont from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends  Component {
    qrcode() {
        console.log("扫描二维码");
    }
    news() {
        console.log("消息通知");
    }
    render (){
        return (
            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.iconFontButton}>
                    <Text style={styles.buttonText}>上海</Text>
                    <IconFont name="angle-down" style={styles.buttonIcon}></IconFont>
                </TouchableOpacity>

                <View style={styles.searchInput}>
                    <Image style={styles.inputImage} source={require('../../images/icon_search.png')}/>
                    <TextInput style={styles.inputText} keyboardType="web-search" placeholder="请输入商家、品类、商圈"></TextInput>
                </View>
                <IconFont.Button name="qrcode" style={styles.iconFontButton} onPress={this.qrcode}></IconFont.Button>
                <IconFont.Button name="envelope-o" style={styles.iconFontButton} onPress={this.news}></IconFont.Button>
            </View>
        )
    }
}

const styles = {
    searchBar: {
        backgroundColor: '#06c1ae',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        height: Platform.OS === 'ios' ? 68 : 48,
        alignItems: 'center'
    },
    iconFontButton: {
        backgroundColor: "#06c1ae",
        padding: 0,
        flexDirection: "row",
        alignItems: "center"
    },
    buttonText: {
        color: 'white'
    },
    buttonIcon: {
        color: 'white',
        fontSize: 14,
        marginLeft: 5
    },
    searchInput: {
        borderRadius: 15,
        backgroundColor: '#fff',
        paddingTop: 7,
        paddingBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    inputImage: {
        width:15,
        height:15,
        marginRight:8,
        marginLeft: 8
    },
    inputText: {
        flex: 1,
        color:'#454545',
        fontSize: 14
    }
}