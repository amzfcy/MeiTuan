/**
 * Created by fancy on 16/8/1.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper';



export default class SwiperImage extends Component {
    _onMomentumScrollEnd(e, state, context) {
        // you can get `state` and `this`(ref to swiper's context) from params
        console.log(state, context.state)
    }

    render() {
        return (
            <Swiper style={styles.wrapper}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    showsButtons={false}>
                <View style={styles.slide1}>
                    <View style={styles.slideInner}>
                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slideInner}>
                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.girdButton}>
                            <Text style={styles.girdButtonText}>美食</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )
    }
}

const styles = {
    wrapper: {
        backgroundColor: "yellow",
    },

    slide1: {
        padding: 10,
        height: 130,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },

    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slideInner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    girdButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    },
    girdButtonText: {
        color: '#fff'
    },
}