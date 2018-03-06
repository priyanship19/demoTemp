import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/homeScreen'
import SecondScreen from '../screens/secondScreen'
import pageIndicator from '../screens/pageIndicator'

export default StackNavigator({
    PageIndicator: { screen: pageIndicator },
    Home: { screen: HomeScreen },
    secondScreen: {screen: SecondScreen}
});
