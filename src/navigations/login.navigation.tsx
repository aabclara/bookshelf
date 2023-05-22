import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenLogin, ScreenCadastrar, ScreenPhoto, ScreenCamera, } from "../screens"
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { TabNavigation } from './tab.navigation';
import { DrawerNavigation } from './drawer.navigation';

type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  Tab: undefined
  Drawer: undefined
  Photo: undefined | {photo: string}
  Camera: undefined
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
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="Photo" component={ScreenPhoto} />
      <Stack.Screen name="Camera" component={ScreenCamera} />
    </Stack.Navigator>
  );
}