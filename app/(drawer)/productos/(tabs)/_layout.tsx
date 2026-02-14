import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="products"
        options={{
          title: 'Productos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="televisores"
        options={{
          title: 'TV',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="tv" color={color} />,
        }}
      />
      <Tabs.Screen
        name="celulares" 
        options={{
          title: 'Celus',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="phone-portrait" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;