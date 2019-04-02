import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home'

const TabNavigator = createBottomTabNavigator({
    Home: Home,
});

export default createAppContainer(TabNavigator);
