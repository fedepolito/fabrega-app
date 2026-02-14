import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 py-0">
        <View className="items-center mb-6">
          <Image
            source={require('../../../assets/images/logo-fravega.png')}
            className="w-50 h-36"
            resizeMode="contain"
          />
        </View>


        <View className="mb-6">
          <Text className="text-xl font-work-black text-primary mb-4">
            Nuestra Historia
          </Text>
          <Text className="text-base font-work-light text-gray-800 leading-6 mb-3">
            Frávega es una empresa líder en venta de electrodomésticos y tecnología en Argentina. 
            Fundada en 1962, nos hemos dedicado a brindar los mejores productos con atención 
            personalizada y servicio de calidad.
          </Text>
          <Text className="text-base font-work-light text-gray-800 leading-6">
            Con más de 60 años en el mercado, contamos con múltiples sucursales en todo 
            el país y un equipo comprometido con la satisfacción del cliente.
          </Text>
        </View>

        <View className="border-t border-gray-300 my-4" />


        <View className="mb-6">
          <Text className="text-xl font-work-black text-primary mb-4">
            Nuestra Misión
          </Text>
          <Text className="text-base font-work-light text-gray-800 leading-6">
            Ofrecer productos de calidad con el mejor servicio, haciendo la tecnología 
            accesible para todos los argentinos, acompañando el crecimiento de los hogares 
            y empresas del país.
          </Text>
        </View>

        <View className="border-t border-gray-300 my-4" />


        <View className="mb-6">
          <Text className="text-xl font-work-black text-primary mb-4">
            Contacto
          </Text>
          <View className="space-y-2">
            <Text className="text-base font-work-medium text-gray-800">
              Teléfono: <Text className="font-work-light">0810-888-8888</Text>
            </Text>
            <Text className="text-base font-work-medium text-gray-800">
              Email: <Text className="font-work-light">info@fravega.com.ar</Text>
            </Text>
            <Text className="text-base font-work-medium text-gray-800">
              Web: <Text className="font-work-light">www.fravega.com.ar</Text>
            </Text>
            <Text className="text-base font-work-medium text-gray-800">
              Atención: <Text className="font-work-light">Lunes a Viernes de 10:00 a 22:00hs </Text>
            </Text>
          </View>
        </View>

        <View className="border-t border-gray-300 my-4" />

    
        <View className="items-center mt-4">
          <Text className="text-sm font-work-light text-gray-500">
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;