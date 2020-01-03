import React from 'react';
import {useDispatch} from 'react-redux';

import {Image, Button} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import CheckinList from './pages/Checkin/CheckinList/';

import HelpList from './pages/Help/HelpList';
import HelpDetail from './pages/Help/HelpDetail';
import HelpSend from './pages/Help/HelpSend';

import {signOut} from './store/modules/auth/actions';

// import ButtonLogout from './components/ButtonLogout';

import {createStackNavigator} from 'react-navigation-stack';

// const dispatch = useDispatch();

function handleLogout() {
  dispatch(signOut());
}

class LogoTitle extends React.Component {
  render() {
    return <Image source={require('./assets/logo.png')} />;
  }
}

// class ButtonLogout extends React.Component {
//   render() {
//     return <Button title="sair" onPress={handleLogout} />;
//   }
// }

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Checkin: {
              screen: createStackNavigator(
                {
                  CheckinList,
                },
                {
                  defaultNavigationOptions: {
                    headerTitle: () => <LogoTitle />,
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Check-in',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="edit-location" size={20} color={tintColor} />
                ),
              },
            },
            Help: {
              screen: createStackNavigator(
                {
                  HelpList,
                  HelpDetail,
                  HelpSend,
                },
                {
                  defaultNavigationOptions: {
                    headerTintColor: '#000000',
                    headerTitle: () => <LogoTitle />,
                  },
                },
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({tintColor}) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#FFFFFF',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
