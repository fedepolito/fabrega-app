import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScheduleScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-4">
    
        

        <View className="mb-6">
          <Text className="text-xl font-work-black text-primary mb-2">
            Flores
          </Text>
          <Text className="text-lg font-work-medium text-gray-800 mb-1">
            Av. Rivadavia 123
          </Text>
          <Text className="text-lg font-work-medium text-gray-800 mb-2">
            1234-4567
          </Text>
          <Text className="text-base font-work-light text-gray-600">
            Lun a Sab de 08:00 a 18:00 hs.
          </Text>
        </View>

        <View className="border-t border-gray-300 my-4" />

   
        <View className="mb-6">
          <Text className="text-xl font-work-black text-primary mb-2">
            Castelar
          </Text>
          <Text className="text-lg font-work-medium text-gray-800 mb-1">
            Santa Rosa 456
          </Text>
          <Text className="text-lg font-work-medium text-gray-800 mb-2">
            (011)-4661-4990/91/92
          </Text>
          <Text className="text-base font-work-light text-gray-600">
            Lun a Sab de 08:00 a 18:00 hs.
          </Text>
        </View>

        <View className="border-t border-gray-300 my-4" />

  
        <View className="mb-6">
          <Text className="text-xl font-work-black text-primary mb-2">
            Ituzaingo
          </Text>
          <Text className="text-lg font-work-medium text-gray-800 mb-1">
            Martin Fierro 789
          </Text>
          <Text className="text-lg font-work-medium text-gray-800 mb-2">
            (011)-4623-4990/91/92
          </Text>
          <Text className="text-base font-work-light text-gray-600">
            Lun a Sab de 08:00 a 18:00 hs.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScheduleScreen;