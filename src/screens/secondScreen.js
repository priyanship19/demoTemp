/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';

class SecondScreen extends Component<{}> {
    constructor(){
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.backgroundContainer}>
                    <Image source = {require('../images/LightBackground.jpg')} resizeMode = 'cover' style = {styles.backdrop} />
                </View>
                <View style = {styles.overlay}>
                   <View>
                       <Text style = {styles.headline}>
                        {this.props.userData[this.props.navigation.state.params.userIndex].title}
                    </Text>
                   </View>
                   <View>
                       <Image style = {styles.logo} resizeMode={'contain'} source = {require('../images/4.jpg')} />
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    overlay: {
        opacity: 0.5,
        backgroundColor: 'transparent'
    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 160,
        height: 52
    },
    backdrop: {
        flex:1,
        flexDirection: 'column'
    },
    headline: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: 'black'
    }
});
const mapStateToProps = state => {
    return {
        userData:state.user.userData
    };
};

export default connect(mapStateToProps, {
})(SecondScreen);