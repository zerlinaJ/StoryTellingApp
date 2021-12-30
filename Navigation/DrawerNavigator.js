import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";
import StackNavigator from "./StackNavigator";
import Logout from '../Screens/Logout'

const Drawer = createDrawerNavigator();

/*const DrawerNavigator = () => { */  // render() not required in this case
export default class DrawerNavigator extends React.Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={StackNavigator} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        );
    };
}

