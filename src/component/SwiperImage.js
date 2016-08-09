/**
 * Created by fancy on 16/8/1.
 */

import React, {Component} from 'react';
import {
    Image
} from 'react-native';

import ViewPager from 'react-native-viewpager';

const BANNER_IMGS = [
    require('../../images/banner/food1.jpg'),
    require('../../images/banner/food2.jpg'),
];

export default class SwiperImage extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
              pageHasChanged: (p1, p2) => p1 !== p2,
        });

        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        };
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    render() {
        return (
            <ViewPager
                style={{height:230}}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}
                isLoop={true}
                autoPlay={true}/>
        )
    }
}

const styles = {
    page: {
        flex: 1,
        height: 230,
        resizeMode: 'stretch'
    }
};