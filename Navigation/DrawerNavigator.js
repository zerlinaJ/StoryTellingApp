import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";
import StackNavigator from "./StackNavigator";
import Logout from '../Screens/Logout'
import CustomSidebarMenu from "../Screens/CustomSideBarMenu";
import firebase from 'firebase'
const Drawer = createDrawerNavigator();

/*const DrawerNavigator = () => { */  // render() not required in this case
export default class DrawerNavigator extends React.Component {
    constructor() {
        super();
        this.state = {
            light_theme: true
        }

    }


    componentDidMount() {
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                theme = snapshot.val().current_theme;
            });
        this.setState({ light_theme: theme === "light" ? true : false });
    }


    render() {
        let props = this.props;
        return (
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: "#e91e63",
                    inactiveTintColor: this.state.light_theme ? "black" : "white",
                    itemStyle: { marginVertical: 5 }
                }}
                drawerContent={props => <CustomSidebarMenu {...props} />}
            >
                <Drawer.Screen name="Home" component={StackNavigator} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
        );
    };
}

