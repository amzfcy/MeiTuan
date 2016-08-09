/**
 * Created by fanchunyu on 2016/7/29.
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';

export default class ShopPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>商家</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        height: Platform.OS === 'ios' ? 68 : 48,
    }
}
