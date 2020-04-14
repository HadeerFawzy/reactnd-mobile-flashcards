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
import AddCard from '../components/AddCard';
import { white, green, red } from '../utils/colors';

const isIOS = Platform.OS === 'ios' ? true : false;

const navTabs = ({
  Decks: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ green }) => (
        <Icon.Ionicons
          name={isIOS ? 'ios-bookmarks' : 'md-bookmarks'}
          size={30}
          color={green}
        />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ green }) => (
        <Icon.FontAwesome name="plus-square" size={30} color={green} />
      )
    }
  },
},{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? green : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : green,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const AppTabs = createBottomTabNavigator(navTabs)

const FlashCardsTabs = createStackNavigator({
  Home: {
    screen: AppTabs,
    navigationOptions: {
      header: null
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
});




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