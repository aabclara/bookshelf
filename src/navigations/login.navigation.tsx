import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastrar } from "../screens"
type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
    </Stack.Navigator>
  );
}