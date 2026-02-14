import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6">   


        <View className="items-center mb-5 mt-2">
          <View className="flex justify-center items-center bg-primary rounded-full h-24 w-24 overflow-hidden mb-3">
            <Image
              source={require('../../../assets/images/yo.jpeg')}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <Text className="text-xl font-work-black text-primary">fedepolito</Text>
        </View>


        <Text className="text-2xl font-work-black text-primary mb-6 text-center">
          Perfil de Usuario
        </Text>


        <View className="space-y-4">
          <View>
            <Text className="text-lg font-work-medium text-gray-800">
              Usuario: <Text className="font-work-light">fedepolito</Text>
            </Text>
          </View>
          
          <View>
            <Text className="text-lg font-work-medium text-gray-800">
              Apellido y Nombre: <Text className="font-work-light">Federico Polito</Text>
            </Text>
          </View>
          
          <View>
            <Text className="text-lg font-work-medium text-gray-800">
              DNI: <Text className="font-work-light">40863247</Text>
            </Text>
          </View>
          
          <View>
            <Text className="text-lg font-work-medium text-gray-800">
              Domicilio: <Text className="font-work-light">Zorrilla de San Martin 4995, Ituzaingó</Text>
            </Text>
          </View>
          
          <View>
            <Text className="text-lg font-work-medium text-gray-800">
              Teléfono: <Text className="font-work-light">11 4022 0863</Text>
            </Text>
          </View>
          
          <View>
            <Text className="text-lg font-work-medium text-gray-800">
              E-Mail: <Text className="font-work-light">fedde.polito@gmail.com</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;