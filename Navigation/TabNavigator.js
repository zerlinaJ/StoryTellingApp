import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import CreateStory from '../Screens/CreateStory';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render(){
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'StoryFeed') {
                iconName = focused ? 'book' : 'book-outline';
              }
              else if (route.name === 'CreateStory') {
                iconName = focused ? 'create' : 'create-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="StoryFeed" component={Feed} />
          <Tab.Screen name="CreateStory" component={CreateStory} />
        </Tab.Navigator>
    )

  }
}
