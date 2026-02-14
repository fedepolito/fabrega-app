import CustomDrawer from '@/components/shared/CustomDrawer'
import { Ionicons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const DrawerLayout = () => {
  const [fontsLoaded] = useFonts({
    'WorkSans-Black': require('../../assets/fonts/WorkSans-Black.ttf'),
    'WorkSans-Light': require('../../assets/fonts/WorkSans-Light.ttf'),
    'WorkSans-Medium': require('../../assets/fonts/WorkSans-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
          overlayColor: 'rgba(0,0,0,0.4)',
          drawerActiveTintColor: 'indigo',
          sceneStyle: { backgroundColor: 'white' },
          headerShadowVisible: false,
        }}
      >
        <Drawer.Screen
        name="home/index" 
        options={{
          drawerLabel: 'Inicio',
          title: 'Inicio',
          drawerIcon: ({ size, color }) => <Ionicons name='home' size={20} color={'blue'}/>
        }}
      />
      <Drawer.Screen
        name="user/index" 
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({ size, color }) => <Ionicons name='person-circle' size={20} color={'blue'}/>
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Sucursales',
          title: 'Sucursales',
          drawerIcon: ({ size, color }) => <Ionicons name='location' size={20} color={'blue'}/>
        }}
      />
      <Drawer.Screen
        name="acerca-de/index"
        options={{
          drawerLabel: 'Acerca de',
          title: 'Acerca de',
          drawerIcon: ({ size, color }) => <Ionicons name='information-circle' size={20} color={'blue'}/>
        }}
      />
      <Drawer.Screen
        name="productos/(tabs)" 
        options={{
          drawerLabel: 'Productos',
          title: 'Productos',
          drawerIcon: ({ size, color }) => <Ionicons name='cart' size={20} color={'blue'}/>
        }}
      />
    </Drawer>
    </View>
  )
}

export default DrawerLayout