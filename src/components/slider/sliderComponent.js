import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import Constant from '../../helper/constant';
import * as Animatable from 'react-native-animatable';

export default  class SliderComponent extends Component {

    // componentDidMount(){
    //     console.log("Component did mount")
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log("propsss",nextProps)
    //     console.log("this propsss",this.props.image)
    // }
    // onScrollImage = () => {
    //     this.refs.introImage.fadeIn(1500);
    // }
    render() {
        return (
            <View style={styles.container}>

                <View style={{top:0, alignItems:'center', position:'absolute'}}>
                    <Text style={{color:'#0C0C0C',fontSize:26, textAlign:'center'}}>
                        {this.props.titleName}
                    </Text>
                    <View style={{marginTop:25}}>
                        <Text style={{color:'#4e4e4e',fontSize:16,textAlign:'center', lineHeight: 21}}>
                            {this.props.description}
                        </Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:Constant.screenWidth,
        height:Constant.screenHeight+10,
        alignItems:'center',
    }
});