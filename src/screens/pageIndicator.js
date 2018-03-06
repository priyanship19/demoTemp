import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import SliderComponent from '../components/slider/sliderComponent';
import TitleSlider from '../components/slider/titleSliderComponent'
import {connect} from 'react-redux'
import * as Animatable from 'react-native-animatable';
import {
    IndicatorViewPager,
    PagerDotIndicator
} from 'rn-viewpager';
import Constant from '../helper/constant';

const images = {
    image1_1:require('../assets/images/image-1.png'),
    image1_2:require('../assets/images/image-2.png'),
    image1_3:require('../assets/images/image-3.png'),
    image1_4:require('../assets/images/image-4.png'),
    image1_5:require('../assets/images/image-5.png'),
    image2_1:require('../assets/images/image-6.png'),
    image2_2:require('../assets/images/image-7.png'),
    image2_3:require('../assets/images/image-8.png'),
    image2_4:require('../assets/images/image-9.png'),
    image2_5:require('../assets/images/image-10.png'),
    image3_1:require('../assets/images/image-11.png'),
    image3_2:require('../assets/images/image-12.png'),
    image4_1:require('../assets/images/image-13.png'),
    image4_2:require('../assets/images/image-14.png'),
    image4_3:require('../assets/images/image-15.png'),
    image4_4:require('../assets/images/image-16.png'),
    image4_5:require('../assets/images/image-17.png'),
    image4_6:require('../assets/images/image-18.png'),
    image4_7:require('../assets/images/image-19.png'),
};

let isChanged=false;

class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter:5,
            isPagination: false,
            noOfPages: 5,
            selectedIndex: 0,
            activeDotColor:'#fa2036',
            currentPageIndex: 0
        };
    }

    static route = {
        styles: {
            gestures: null
        },
    };

    componentDidMount(){
        this.refs.mainView.fadeIn(400);
    }


    onNextClick = () => {
        this.setState({
            counter:this.state.counter+1
        });
    };

    onLastButtonClick = () => {
        //this.props.navigator.replace(Router.getRoute("stories"));
        this.props.navigation.navigate("Home");
    };

    onScroll = (e) => {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
        // Divide the horizontal offset by the width of the view to see which page is visible
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        this.setPagination(pageNum);
    };


    setPagination = (pageNum) => {
        let activeDotColor = "#fa2036";
        if(pageNum>=12) {
            if (pageNum <= 15 && pageNum >= 12) {
                activeDotColor = '#05c3f9';
            }else{
                activeDotColor = '#5bc4bd';
            }
        }
        if(pageNum == 0 || pageNum == 6 || pageNum == 12 || pageNum == 15) { //5  5 2  7
            this.setState({
                isPagination: false,
                noOfPages: (pageNum==0 || pageNum == 6) ? 5 : (pageNum == 12) ? 2 : 7,
                selectedIndex: -1,
                activeDotColor: activeDotColor
            });
        }else{
            let selectedIndex = 0;
            if(pageNum == 1 || pageNum == 7 || pageNum == 13 || pageNum == 16){

                selectedIndex = 0;

            }else if(pageNum == 2 || pageNum == 8 || pageNum == 14 || pageNum == 17){

                selectedIndex = 1;

            }else if(pageNum == 3 || pageNum == 9 || pageNum == 18){

                selectedIndex = 2;

            }else if(pageNum == 4 || pageNum == 10 || pageNum == 19){

                selectedIndex = 3;

            }else if(pageNum == 5 || pageNum == 11 || pageNum == 20){

                selectedIndex = 4;

            }else if(pageNum == 21){

                selectedIndex = 5;

            }else if(pageNum == 22) {

                selectedIndex = 6;

            }else{
                selectedIndex = 7;
            }

            this.setState({
                selectedIndex: selectedIndex,
                isPagination: true,
                noOfPages: (pageNum <= 12) ? 5 : (pageNum <= 14) ? 2 : 7,
                activeDotColor: activeDotColor
            });
        }
    };
    _renderDotIndicator = () => <PagerDotIndicator pageCount={24} />;

    currntIndexCall = () => {
       let ind = this.refs.pagerrr._currentIndex
        console.log(ind)
        this.setState({
            currentPageIndex: ind
        })
    }
    render() {
        // console.log(this.refs.pagerrr.getCurrentPageIndex() || 'no refsss')
        return (
            <Animatable.View style={styles.container} ref="mainView">
                <View style={{height:(this.state.currentPageIndex === 0)?0:'60%'}}>
                    <Animatable.View style={{marginTop:Constant.screenHeight/10,width:'100%',height:'40%'}} ref='introImage'>
                        <Image source={require('../assets/images/image-1.png')} style={{flex:1,height:null,width:null}} resizeMode={'contain'}/>
                    </Animatable.View>
                </View>
                <View style={{height:(this.state.currentPageIndex === 0)?'100%':'40%'}}>

                <IndicatorViewPager style={{flex:1}} indicator={ this._renderDotIndicator()} ref='pagerrr' onPageSelected={this.currntIndexCall}>

                    <View>
                        <TitleSlider backcolor="#EC3B29" title="Why do I watch so much porn?"
                                     onNextClick={this.onNextClick}/>
                    </View>
                    <View>
                        <SliderComponent image={images.image1_1}
                                         titleName="Porn is a drug"
                                         description="Using porn releases a chemical in the brain called dopamine. This chemical makes you feel good - its why you feel pleasure when you watch porn."/>
                    </View>
                    <View>

                        <SliderComponent image={images.image1_2}
                                         titleName="I need more"
                                         description="The more porn you watch, the more dopamine your brain needs to feel good. This is why porn doesn't satisfy you as much as it used to."/>
                    </View>
                    <View>

                        <SliderComponent image={images.image1_3}
                                         titleName="Nothing compares"
                                         description="Porn has changed your brain to only respond to abnormally high levels of dopamine. So normal everyday activities leave you feeling unsatisfied."/>
                    </View>
                    <View>

                        <SliderComponent image={images.image1_4}
                                         titleName="Feeling unhappy?"
                                         description="An elevated dopamine level means you need more dopamine to feel good. This is why so many porn users report feeling depressed, unmotivated, and anti-social."/>
                    </View>
                    <View>

                        <SliderComponent image={images.image1_5}
                                         titleName="It gets worse"
                                         description="Over time, your brain starts to associate porn with pleasure. This can lead to a lack of interest in real women, weaker erections, and relationship problems."/>
                    </View>
                    <View>

                        <TitleSlider backcolor="#EC3B29"
                                     title={"Porn messes with your brain like chemical drugs do, but porn can't kill you."+'\n\n'+"So what can it do?"}
                                     onNextClick={this.onNextClick}/>
                    </View>
                    <View>

                        <SliderComponent image={images.image2_1}
                                         titleName="Porn ruins relationships"
                                         description="Porn reduces your appetite for real relationships and increases your appetite for more porn."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image2_2}
                                         titleName="Porn kills your sex drive"
                                         description="More than 50% of heavy porn users report experiencing low libido and a loss of interest in real sex."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image2_3}
                                         titleName="Porn limits success"
                                         description="58% of heavy porn users suffer major financial loss and as many as one third eventually lose their jobs."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image2_4}
                                         titleName="Porn prevents happiness"
                                         description="Studies show a significant relationship between frequent porn use and feelings of loneliness and major depression."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image2_5}
                                         titleName="Porn ruins your life"
                                         description="Porn users are 23 times more likely to state that 'discovering online sexual material was the worst thing that every happened in my life'."/>

                    </View>
                    <View>

                        <TitleSlider backcolor="#05c3f9" title="How do I reboot my brain?"
                                     onNextClick={this.onNextClick}/>

                    </View>
                    <View>
                    <SliderComponent image={images.image3_1}
                                         titleName="Reset your baseline"
                                         description="As your dopamine levels return to normal, you'll start to feel more pleasure from everyday activities like watching a movie, or hanging out with friends."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image3_2}
                                         titleName="Rewire your brain"
                                         description="Rewiring' involves creating healthy new synaptic pathways in the brain that prefer healthy sources of dopamine instead of a destructive, short-term porn fix."/>


                    </View>
                    <View>
                    <TitleSlider backcolor="#5bc4bd"
                                     title="Your Brainbuddy Rebooting Program"
                                     onNextClick={this.onNextClick}/>

                    </View>
                    <View>
                    <SliderComponent image={images.image4_1}
                                         titleName="Daily missions"
                                         description="Each day you receive a new mission card. Each mission you complete rewires your brain to seek out healthy sources of dopamine."/>
                    </View>
                    <View>
                        <SliderComponent image={images.image4_2}
                                         titleName="Check in each evening"
                                         description="Your daily checkup learns about your day and optimizes your recovery program so that you reboot fast, effectively and permanently."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image4_3}
                                         titleName="24/7 protection"
                                         description="Based on over 3000 hours of patient study, Brainbuddy monitors the factors that lead to dopamine cravings and protects you from porn relapse."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image4_4}
                                         titleName="Rewire your brain"
                                         description="Throughout your reboot, Brainbuddy will prescribe specialized exercises destroy addiction pathways, freeing you from porn cravings. Permanently."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image4_5}
                                         titleName="Know yourself"
                                         description="Know yourself to conquer yourself. Track your progress, learn your strengths and weaknesses, and see just how far you've come."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image4_6}
                                         titleName="Life tree"
                                         description="Every day you avoid porn and live a healthy life, your Life Tree grows. As you become happier and healthier, so does your Life Tree."/>
                    </View>
                    <View>
                    <SliderComponent image={images.image4_7}
                                         titleName="Level up your life"
                                         description="Rebooting your brain has immense pyschological and physical benefits. Brainbuddy unlocks achievements as your brain, body and life get better."/>

                    </View>
                    <View>
                    <TitleSlider backcolor="#fbb043"
                                     title="Some benefits from people who have successfully rebooted"
                                     onNextClick={this.onLastButtonClick}
                                     isLast={true}/>

                    </View>

                </IndicatorViewPager>
                </View>
            </Animatable.View>
    );
    }
    }

    const styles = StyleSheet.create({
        container:{
        flex:1,
        backgroundColor: '#FFF'
    }
    });
    const mapStateToProps = state => {
        return {
        userData: state.user.userData,
    };
    };

    export default connect(mapStateToProps, {

    })(Slider);