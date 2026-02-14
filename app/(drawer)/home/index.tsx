import CustomButton from '@/components/shared/CustomButton';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type DrawerParamList = {
  'home/index': undefined;
  'user/index': undefined;
  'schedule/index': undefined;
  'acerca-de/index': undefined;
};

type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<DrawerNavProp>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-start items-center pt-0 px-6">
        <View className="mb-4">
          <Image
            source={require('../../../assets/images/logo-fravega.png')}
            className="w-80 h-46"
            resizeMode="contain"
          />
        </View>
        
        <Text className="text-primary text-3xl font-work-black mb- text-center">Bienvenidos</Text>
        <Text className="text-primary text-3xl font-work-black mb-7 text-center">a la aplicacion oficial</Text>


        <View className="w-full flex-1 justify-center">
          

          <View className="w-full h-16 mb-4 bg-transparent">
            <CustomButton 
              color="primary" 
              onPress={() => router.push('/(drawer)/productos/(tabs)/products')}
            >
              Productos
            </CustomButton>
          </View>
          
          <View className="w-full h-16 mb-4 bg-transparent">
            <CustomButton 
              color="primary" 
              onPress={() => router.push('/schedule')}
            >
              Sucursales
            </CustomButton>
          </View>
          
          <View className="w-full h-16 mb-4 bg-transparent">
            <CustomButton 
              color="primary" 
              onPress={() => router.push('/user')}
            >
              Usuario
            </CustomButton>
          </View>
          
          <View className="w-full h-16 bg-transparent">
            <CustomButton 
              color="tertiary" 
              onPress={() => navigation.toggleDrawer()}
            >
              Ver Menú
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;