/**
 * Created by fancy on 16/8/2.
 */

import React, {Component, PropTypes} from 'react';
import {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

let halfWidth = Dimensions.get('window').width/2;

export default class ActivityButton extends Component {

    static propTypes = {
        renderIcon: PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        showTitle: PropTypes.string,
        showText: PropTypes.string,  // 显示标题\文字
        titleColor: PropTypes.string, //标题颜色
        onClick: PropTypes.func,  // 回调函数,
        borderRightWidth: PropTypes.number,
        borderRightColor: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.tag);  // 回调Title和Tag
        }
    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={styles.activityButtonCon}>

                    <View style={styles.textCon}>
                        <Text style={[styles.showTitle, {color: this.props.titleColor}]}>{this.props.showTitle}</Text>
                        <Text style={styles.showText}>{this.props.showText}</Text>
                    </View>

                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    activityButtonCon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },
    textCon: {

    },
    iconImg: {
        width: 40,
        height: 40
    },
    showTitle: {
        fontSize: 18,
        marginBottom: 4
    },
    showText: {
        fontSize: 12,
        color: '#666'
    }
};