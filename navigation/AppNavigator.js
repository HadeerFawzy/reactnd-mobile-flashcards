import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import * as Icon from '@expo/vector-icons';
import DecksList from '../components/DecksList';
import AddDeck from '../components/AddDeck';
import { white, green, red } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const FlashCardsTabs = createStackNavigator({
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: green,
      headerStyle: {
          backgroundColor: green
      },
      title: 'Add Deck',
    }
  },
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      headerTintColor: green,
      headerStyle: {
          backgroundColor: green
      },
      title: 'Decks',
    }
  }
  },{
    navigationOptions: {
      header: null
    },
    headerTitleAlign: 'center'
  }
);

const AppTabs = createBottomTabNavigator()


// function CardsTabs() {
//   return (
//     <NavigationContainer>
//       <AppTabs.Navigator>
//         <AppTabs.Screen name="Decks" component={DecksList} />
//         <AppTabs.Screen name="AddDeck" component={AddDeck} />
//       </AppTabs.Navigator>
//     </NavigationContainer>
//   );
// }

export default createAppContainer(FlashCardsTabs);