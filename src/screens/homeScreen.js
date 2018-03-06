/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,TouchableHighlight,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { getUserData } from '../actions/userAction';
import Reactotron from 'reactotron-react-native'

class App extends Component<{}> {
    constructor(props){
        super(props)
        this.state=
            {
                userData: []
            }
    }
    componentDidMount(){
        this.props.getUserData()
    }
    showAlert(maintitle,text){
        Alert.alert(
            maintitle,
            text,
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
        )
    }
    renderItem = ({item, index}) => {
        return (
            <TouchableHighlight key={index} onPress={() => this.props.navigation.navigate('secondScreen',{userIndex: index})} style={{height:50, backgroundColor:'white', borderWidth:1,borderColor:'gray',justifyContent:'center'}}>
                <Text style={{marginLeft:10,color:'red'}}>{item.id+':'+item.title}</Text>
            </TouchableHighlight>
        )
    }
    render() {
        Reactotron.log("gfdggfdfd")
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <FlatList
                    data={this.props.userData}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
const mapStateToProps = state => {
    return {
        userData:state.user.userData
    };
};

export default connect(mapStateToProps, {
    getUserData
})(App);