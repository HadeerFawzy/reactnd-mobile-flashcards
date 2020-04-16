import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DecksList from '../components/DecksList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import { white, green, red, grey } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DecksListStackScreen() {
  return (
    <Stack.Navigator initialRouteName="DecksList">
      <Stack.Screen name="DecksList" component={DecksList} options={{ title: 'Decks' }}/>
    </Stack.Navigator>
   );
}

function AddDeckListStackScreen() {
  return (
    <Stack.Navigator initialRouteName="AddDeck">
      <Stack.Screen name="AddDeck" component={AddDeck} options={{ title: 'Add Deck' }}/>
    </Stack.Navigator>
   );
}


function FlashCardsTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="DecksListStackScreen"
                   screenOptions={({ route }) => ({
                   tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'DecksListStackScreen') {
                        iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                      } else if (route.name === 'AddDeckListStackScreen') {
                        iconName = focused
                        ? 'ios-list-box'
                        : 'ios-list';
                      }
                      return <Ionicons name={iconName} size={30} color={green}/>;
                   }})}
                  tabBarOptions={{
                  activeTintColor: 'green',
                  inactiveTintColor: 'grey',
                  }}>
      <Tab.Screen name="DecksListStackScreen" component={DecksListStackScreen} options={{ title: 'Decks' }}/>
      <Tab.Screen name="AddDeckListStackScreen" component={AddDeckListStackScreen} options={{ title: 'Add Deck' }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default FlashCardsTabs;