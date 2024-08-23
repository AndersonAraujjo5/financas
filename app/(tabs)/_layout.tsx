import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AntDesign, Feather } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
       <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="dashboard"
        options={{
          title: 'DashBoard',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="pie-chart" size={24} color={color}  />
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="qrcode"
        options={{
          title: 'QrCode',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="qrcode" size={24} color={color}  />
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="user" size={24} color={color}  />
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
