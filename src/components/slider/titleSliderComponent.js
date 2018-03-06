import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
import Constant from '../../helper/constant';

export default class TitleSliderComponent extends Component {

    onNextClick = () => {
        this.props.onNextClick();
    };

    render() {
        const config = {
            velocityThreshold: 0.1,
            directionalOffsetThreshold: 50
        };
        return (
            <View style={[styles.container,{backgroundColor:this.props.backcolor}]}>
                <View style={{marginTop: Constant.screenHeight/10,width:'82%',height:'40%',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:26,textAlign:'center'}}>
                        {this.props.title}
                    </Text>
                </View>

                {(this.props.isLast) ?
                    <View style={{top:(Constant.screenHeight*75)/100, left:0, right:0, bottom:0, position:'absolute'}}>
                        <TouchableHighlight title="Reboot Benefits"
                                backColor="#FFF"
                                color="#fbb043"
                                otherStyle={{width:"80%", marginTop:0, height:60}}
                                otherTextStyle={{
                                    fontSize: 16}}
                                            onPress={this.props.onNextClick}>
                            <Text>Reboot Benefits</Text>
                        </TouchableHighlight>
                    </View>
                    :
                    <Image style={{top:'68%',width:135,height:57, position:'absolute', opacity: 0.5}}
                           resizeMode={'contain'}
                           source={require('../../assets/images/image-1.png')}/>
                }

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        width:Constant.screenWidth,
        height:Constant.screenHeight,
        alignItems:'center',
    }
});