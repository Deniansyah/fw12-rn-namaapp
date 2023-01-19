import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import SetPassword from './SetPassword';
import Landing from './Landing';
import ListMovie from './ListMovie';
import MovieDetail from './MovieDetail';
import Order from './Order';
import Payment from './Payment';
import Profile from './Profile';
import History from './History';
import Ticket from './Ticket';

import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          {!token && (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="SetPassword"
                component={SetPassword}
                options={{headerShown: false}}
              />
            </>
          )}
          {token && (
            <>
              <Stack.Screen
                name="Landing"
                component={Landing}
                options={{headerShown: false}}
              />

              <Stack.Screen
                name="ListMovie"
                component={ListMovie}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="MovieDetail"
                component={MovieDetail}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Order"
                component={Order}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="History"
                component={History}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Ticket"
                component={Ticket}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Main;
