import * as React from 'react';
import {StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import CreateStory from '../Screens/CreateStory';
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render(){
    return (
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'StoryFeed') {
                iconName = focused ? 'book' : 'book-outline';
              }
              else if (route.name === 'CreateStory') {
                iconName = focused ? 'create' : 'create-outline';
              }
              return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons}/>
            }
          })}
          activeColor={"#ee8249"}
          inactiveColor={"gray"}
        >
          <Tab.Screen name="StoryFeed" component={Feed} />
          <Tab.Screen name="CreateStory" component={CreateStory} />
        </Tab.Navigator>
    )

  }
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});