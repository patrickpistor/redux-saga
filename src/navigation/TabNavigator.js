import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home'

const StackNavigator = createStackNavigator({
    Home: Home,
});

export default createAppContainer(StackNavigator);
