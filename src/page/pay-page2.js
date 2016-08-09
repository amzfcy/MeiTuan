/**
 * Created by fancy on 16/8/9.
 */
import React, {Component} from 'react';

import {
    View,
    Text,
    WebView
} from 'react-native';

var DEFAULT_URL = 'https://www.baidu.com/';


export default class PayPage2 extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            url: DEFAULT_URL
        };
      }
    render() {
        return (
            <View style={{flex: 1, padding: 0}}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={require('./pay-page3.html')}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}>
                </WebView>
            </View>
        )
    }

}

const styles = {
    webView:{
        flex: 1,
        backgroundColor:'#ccc',
    }
}