import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/Screen1'
import TrangChu from './Screen/Screen2'
import React from 'react';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='TrangChu' component={TrangChu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;