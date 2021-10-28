import React from 'react';
import Login from './screens/login';
import Signup from './screens/signup';
import ResetPassword from './screens/resetPassword';
import NewPassword from './screens/newPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{ headerStyle: { backgroundColor: '#36e697' }}}
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            component={Signup} />
          <Stack.Screen
            name="Reset Password"
            component={ResetPassword} />
          <Stack.Screen
            name="New Password"
            component={NewPassword} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

