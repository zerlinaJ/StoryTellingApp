import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

/*const DrawerNavigator = () => { */  // render() not required in this case
export default class DrawerNavigator extends React.Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={StackNavigator} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        );
    };
}

