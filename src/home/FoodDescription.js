/**
 * Created by fancy on 16/8/5.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';
import IconFont from 'react-native-vector-icons/FontAwesome';
import PayPage from '../page/pay-page';
import PayPage2 from '../page/pay-page2';

let fullWidth = Dimensions.get('window').width;

export default class FoodDescription extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    _back(){
        const {navigator} = this.props;
        if(navigator) {
            navigator.pop();
        }
    }

    _offerToPay(){

        const {navigator}  = this.props;
        const {rowData} = this.props;
        if(navigator) {
            navigator.push({
                name: "PayPage2",
                component: PayPage2,
                params: {
                    rowData: rowData
                }
            });
        }
    }

    render() {
        let rowData = this.props.rowData;
        return (
            <View style={{backgroundColor: '#f0efed'}}>
                <View style={styles.navigatorHeader}>
                    <TouchableWithoutFeedback onPress={this._back.bind(this)}>
                        <View style={styles.navigatorButton}>
                            <Text style={{color: '#fff'}}>返回</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{ flexDirection: 'row'}}>
                        <TouchableWithoutFeedback>
                            <View style={styles.navigatorButton}>
                                <Text style={{color: '#fff'}}>分享</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback>
                            <View style={styles.navigatorButton}>
                                <Text style={{color: '#fff'}}>收藏</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <Swiper style={styles.wrapper}
                        paginationStyle={{bottom: 5}}
                        height={170}
                        autoplay={true} >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>第一页</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>第二页</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>第三页</Text>
                    </View>
                </Swiper>

                <View style={styles.baseInfo}>
                    <View style={styles.baseInfoTop}>
                        <View style={{paddingTop: 10, paddingBottom: 10}}>
                            <Text style={{marginBottom: 5, fontSize: 16, fontWeight: 'bold', color: '#333'}}>{rowData.name}</Text>
                            <Text style={{marginBottom: 5, color:'#999'}}>人均: ￥{rowData.averagePrice}</Text>
                            <Text style={{color: '#666'}}>月消费人次: 小于100</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.payButton} onPress={this._offerToPay.bind(this)}>
                                <Text style={{color: '#fff'}}>优惠买单</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.baseInfoBottom}>
                        <TouchableOpacity style={styles.addressInfo}>
                            <Image style={{width:14, height: 14, marginRight: 8}} source={require('../../images/food_icons/location.png')}/>
                            <Text style={{color: '#666'}}>{rowData.address}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 50}}>
                            <Image style={{width:20, height: 20}} source={require('../../images/food_icons/phone.png')}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = {

    navigatorHeader: {
        width: fullWidth,
        backgroundColor: 'rgba(0,0,0,0)',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 20,
        zIndex: 999
    },
    navigatorButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    baseInfo: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#d8d8d8',
        backgroundColor: '#fff',
        marginBottom: 10
    },
    baseInfoTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor:'#e4e4e4',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    payButton: {
        width: 80,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9e05',
        borderRadius: 4
    },
    baseInfoBottom: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addressInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRightWidth:1,
        borderRightColor:'#e5e5e5',
        paddingTop: 5,
        paddingBottom: 5
    },
}