import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

export default  class SliderDotComponent extends Component {

    constructor(props) {
        super(props);
        let arr = [];
        for(let i=0; i<props.noOfPages; i++){
            arr.push(i);
        }
        this.state={
            noOfPages :props.noOfPages,
            arr: arr,
        };

    }

    componentWillReceiveProps(nextProps) {
        let arr = [];
        for(let i=0; i<nextProps.noOfPages; i++) {
            arr.push(i);
        }
        this.setState({
            arr:arr
        });

    }

    render() {
        return (
            <View style={styles.container}>
                { this.state.arr.map((i) => {
                    return(
                        <View style={[styles.dotView,
                        {backgroundColor: (i==this.props.selectedIndex) ?
                        this.props.activeDotColor : 'rgb(220, 220, 220)'}]}
                              key={i}/>
                    );
                }) }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    dotView:{
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor:'rgb(220, 220, 220)', //'rgb(236, 59, 41)'
        marginLeft: 10,
    }
});