/**
 * Created by fancy on 16/8/8.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Platform,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import IconFont from 'react-native-vector-icons/FontAwesome';

export default class PayPage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: ""
        };
    }

    _back() {
        const {navigator} = this.props;
        navigator.pop();
    }

    _changeText(text) {
        console.log(text);
    }

    render() {
        let {name} = this.props.rowData;

        let maxLength = 6;

        let {preferentialInfo} = this.props.rowData;

        return (
            <View style={styles.container}>
                <View style={styles.navigatorHeader}>
                    <IconFont.Button name="chevron-left"
                                     style={styles.iconFontButton}
                                     iconStyle={styles.iconStyle}
                                     onPress={this._back.bind(this)}>
                    </IconFont.Button>

                    <View style={styles.navigatorTitle}>
                        <Text>{name}</Text>
                    </View>

                    <TouchableWithoutFeedback>
                        <View>
                            <Text style={styles.iconStyle}>优惠说明</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View>
                    <View style={styles.input}>
                        <Text>消费总额:</Text>
                        <TextInput ref="totalMoney"
                                   style={{flex: 1, textAlign: 'right', fontSize: 14}}
                                   placeholder="输入到店消费总额"
                                   keyboardType="numeric"
                                   maxLength={maxLength}
                                   onChangeText={(text)=>{this._changeText(text)}}
                        />
                    </View>

                    <TouchableOpacity style={{padding: 10}}>
                        <Text style={{color: '#0cc0a5'}}>输入不享优惠金额</Text>
                    </TouchableOpacity>

                    <View style={styles.infoShow}>
                        <View style={{flexDirection:'row',justifyContent:'space-between', flex: 1}}>
                            <Text>{preferentialInfo}</Text>
                            <Text style={{color: '#ff9a0a'}}></Text>
                        </View>
                    </View>
                    <View style={styles.infoShow}>
                        <Text>实付金额</Text>
                        <Text style={{color: '#ff9a0a'}}>￥0</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color: '#fff'}}>确认买单</Text>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
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
        borderBottomColor: '#ccc',
        marginBottom: 20
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
    navigatorTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ebebeb',
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    button: {
        height: 45,
        backgroundColor: '#ffcf83',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 10
    },
    infoShow: {
        height: 50,
        flexDirection: 'row',
        borderTopWidth: 2,
        borderTopColor: '#d8d8d8',
        borderBottomWidth: 1,
        borderBottomColor: '#d9d9d9',
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

}