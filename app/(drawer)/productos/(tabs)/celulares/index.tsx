import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { phone } from '../../../../../store/phone';

const CelularesScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList 
        data={phone}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl font-work-black'>{item.titulo}</Text>
            <Text className=''>{item.descripcion}</Text>
            <View className='flex flex-row justify-between'>
              <Text className='font-work-black'>${item.precio}</Text>
              <Link
                href={{
                  pathname: '/(drawer)/productos/(tabs)/celulares/[id]',
                  params: { id: item.id }
                }}
                className='text-primary'
              >
                Ver Detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CelularesScreen;