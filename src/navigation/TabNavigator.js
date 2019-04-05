import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home/Home'

const StackNavigator = createStackNavigator({
    Home: Home,
});

export default createAppContainer(StackNavigator);
