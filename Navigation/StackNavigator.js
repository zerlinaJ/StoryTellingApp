import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from '../Screens/StoryScreen'


const Stack = createStackNavigator();

/*const DrawerNavigator = () => { */  // render() not required in this case
export default class DrawerNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown:false
            }}
            >
                <Stack.Screen name="Home" component={TabNavigator} />
                <Stack.Screen name="StoryScreen" component={StoryScreen} />
            </Stack.Navigator>
        );
    };
}

