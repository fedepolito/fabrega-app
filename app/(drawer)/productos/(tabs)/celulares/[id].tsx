
import { useNavigation } from '@react-navigation/native';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { phone as phoneProducts } from '../../../../../store/phone';
import rutasCelulares from './rutas';

const CelularesDetailScreen = () => {
    const { id } = useLocalSearchParams();
    const celular = phoneProducts.find((p) => p.id === id);

    let imagenDinamica;
    switch (celular?.foto) {
      case 'imagen1': imagenDinamica = rutasCelulares['imagen1']; break;
      case 'imagen2': imagenDinamica = rutasCelulares['imagen2']; break;
      case 'imagen3': imagenDinamica = rutasCelulares['imagen3']; break;
      case 'imagen4': imagenDinamica = rutasCelulares['imagen4']; break;
      case 'imagen5': imagenDinamica = rutasCelulares['imagen5']; break;
    }

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          title: celular?.titulo ?? 'Celular',
        });
      }, [celular]);

    if (!celular) {
        return <Redirect href='/(drawer)/productos/(tabs)/celulares' />
    }
        
    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl'>{celular.titulo}</Text>
            <Text className='mt-2 text-gray-700'>{celular.descripcion}</Text>
            <Text className='mt-4 font-work-black text-xl'>${celular.precio.toLocaleString()}</Text>
            <View className='mx-5 mt-6' style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                  source={imagenDinamica} 
                  style={{ width: 300, height: 300, resizeMode: 'contain' }}
                />
            </View>
        </View>
    );
};

export default CelularesDetailScreen;