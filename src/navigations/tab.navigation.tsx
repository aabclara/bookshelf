import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil } from "../screens";
import { colors } from "../styles/colors";
import { Ionicons } from '@expo/vector-icons';
type TabParamList = {
  Perfil: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.fourth,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.fourth
        },
        headerTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24}/>
          ),
          /*tabBarShowLabel: false -> tira o texto do ícone na tab*/
        }}
      />
    </Tab.Navigator>
  );
}