/**
 * Created by fancy on 16/8/3.
 */

import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ListView
} from 'react-native';

var restaurantData = require('../data/restaurantData');

import IconFont from 'react-native-vector-icons/FontAwesome';
import FoodDescription from './FoodDescription';

export default class Food extends Component {
    // 构造
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});

        // 初始状态
        this.state = {
            dataSource: ds,
            data: restaurantData
        };
    }

    _back() {   //返回
        const {navigator} = this.props;

        if(navigator) {
            navigator.pop();
        }
    }

    mapMaker() {
        alert("定位");
    }

    _jumpToFood(rowData){

        const {navigator} = this.props;

        if(navigator) {
            navigator.push({
                name: "FoodDescription",
                component: FoodDescription,
                params:{
                    rowData: rowData
                }
            })
        }
    }

    _renderRow(rowData, rowId) {
        let imageSource = rowData.image;
        let takeout = rowData.takeout;
        let preferential = rowData.preferential;
        let reservations = rowData.reservations;
        let preferentialInfo = rowData.preferentialInfo;
        let groupBuyInfo = rowData.groupBuyInfo;
        let ticketInfo = rowData.ticketInfo;
        return (
            <View style={styles.listItemContainer}>
                <TouchableWithoutFeedback id={rowId} ref="touchArea" onPress={this._jumpToFood.bind(this, rowData)}>
                    <View style={styles.listItemContent}>

                        <View style={styles.listItemBaseInfo}>
                            <View style={styles.listItemBaseInfoLeft}>
                                <View style={{borderRadius: 4, overflow: 'hidden'}}>
                                    <Image style={styles.listItemImg} source={require('../../images/job1.jpg')} />
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                <View style={styles.listItemBaseInfoRight}>
                                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <Text style={styles.listItemBaseInfoTitle}>{rowData.name}</Text>
                                        {
                                            takeout? (
                                                <Image style={{width: 16, height: 16, marginLeft: 4 }}
                                                       source={require('../../images/food_icons/takeout.png')}/>
                                            ): ( null )
                                        }
                                        {
                                            preferential? (
                                                <Image style={{width: 16, height: 16, marginLeft: 4 }}
                                                       source={require('../../images/food_icons/preferential.png')}/>
                                            ): ( null )
                                        }
                                        {
                                            reservations? (
                                                <Image style={{ width: 16, height: 16, marginLeft: 4 }}
                                                       source={require('../../images/food_icons/yuding.png')}/>
                                            ): ( null )
                                        }

                                    </View>
                                    <Text style={{ color: '#666'}}>￥{rowData.averagePrice}/人</Text>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{ color: '#666'}}>{rowData.type}</Text>
                                        <Text style={{ color: '#666'}}>{rowData.location}</Text>
                                    </View>
                                </View>

                                <View style={styles.listItemOtherInfo}>

                                    {
                                        preferentialInfo ? (
                                            <View style={styles.listItemOtherInfoItem}>
                                                <Image style={{height: 16, width: 16, marginRight: 4}} source={require('../../images/food_icons/youhui.png')} />
                                                <Text style={{ color: '#666'}}>{preferentialInfo}(买单立享)</Text>
                                            </View>
                                        ): ( null )
                                    }

                                    {
                                        groupBuyInfo ? (
                                            <View style={styles.listItemOtherInfoItem}>
                                                <Image style={{height: 16, width: 16, marginRight: 4}} source={require('../../images/food_icons/tuangou.png')}/>
                                                <Text style={{ color: '#666'}}>{groupBuyInfo}</Text>
                                            </View>
                                        ): ( null )
                                    }

                                    {
                                        ticketInfo ? (
                                            <View style={styles.listItemOtherInfoItem}>
                                                <Image style={{height: 16, width: 16, marginRight: 4}} source={require('../../images/food_icons/youhuiquan.png')}/>
                                                <Text style={{ color: '#666'}}>{ticketInfo}</Text>
                                            </View>
                                        ) : ( null )
                                    }

                                </View>

                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navigatorHeader}>
                    <IconFont.Button name="chevron-left"
                                     style={styles.iconFontButton}
                                     iconStyle={styles.iconStyle}
                                     onPress={this._back.bind(this)}>
                    </IconFont.Button>

                    <View style={styles.searchInput}>
                        <Image style={styles.inputImage} source={require('../../images/icon_search.png')}/>
                        <TextInput style={styles.inputText} keyboardType="web-search" placeholder="请输入商家、品类、商圈"></TextInput>
                    </View>

                    <IconFont.Button name="location-arrow"
                                     style={styles.iconFontButton}
                                     iconStyle={styles.iconStyle}
                                     onPress={this.mapMaker}>
                    </IconFont.Button>
                </View>

                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, rowId) }
                    showsVerticalScrollIndicatior={false} />

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#f0efed",
    },
    navigatorHeader: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        height: Platform.OS === 'ios' ? 68 : 48,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    iconFontButton: {
        backgroundColor: "#fff",
        padding: 0,
        margin: 0,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    iconStyle: {
        color: "#06c1ae"
    },
    searchInput: {
        borderRadius: 15,
        backgroundColor: '#f9f9f9',
        paddingTop: 7,
        paddingBottom: 7,
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
    },

    listItemContainer: {
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
        borderTopWidth: 1,
        borderTopColor: "#d8d8d8",
        backgroundColor: "#fff"
    },
    listItemContent: {
        flex: 1
    },
    listItemBaseInfo: {
        flexDirection: 'row',
    },
    listItemBaseInfoLeft: {
        padding: 8,
        borderRadius: 4,
        overflow: 'hidden',
        justifyContent: 'flex-start'
    },
    listItemImg: {
        width: 65,
        height: 65
    },
    listItemBaseInfoRight: {
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 8,
        height: 85
    },
    listItemBaseInfoTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold'
    },

    listItemOtherInfo: {
        paddingTop: 5
    },
    listItemOtherInfoItem: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        marginBottom: 5
    },


}