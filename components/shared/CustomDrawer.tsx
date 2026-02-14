import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex justify-center items-center mx-3 p-3 pt-6 h-[180px] rounded-xl bg-primary mb-4">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24 overflow-hidden mb-3"> 
          <Image
            source={require('../../assets/images/yo.jpeg')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <Text className="text-white font-work-medium text-lg">
          NC
        </Text>
      </View>

      <DrawerContentScrollView {...props} className="flex-1 px-3">
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;