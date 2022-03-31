import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './page/Home';
import Penerbangan from './page/Penerbangan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Penerbangan" component={Penerbangan} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;