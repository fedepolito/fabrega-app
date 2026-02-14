import { useNavigation } from '@react-navigation/native';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { tv as tvProducts } from '../../../../../store/tv';
import rutasTv from './rutas';

const TvDetailScreen = () => {
    const { id } = useLocalSearchParams();
    const tv = tvProducts.find((p) => p.id === id);

    let imagenDinamica;
    switch (tv?.foto) {
      case 'imagen1': imagenDinamica = rutasTv['imagen1']; break;
      case 'imagen2': imagenDinamica = rutasTv['imagen2']; break;
      case 'imagen3': imagenDinamica = rutasTv['imagen3']; break;
      case 'imagen4': imagenDinamica = rutasTv['imagen4']; break;
      case 'imagen5': imagenDinamica = rutasTv['imagen5']; break;
    }

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          title: tv?.titulo ?? 'TV',
        });
      }, [tv]);

    if (!tv) {
        return <Redirect href='/(drawer)/productos/(tabs)/products' />
    }
        
    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-2xl'>{tv.titulo}</Text>
            <Text className=''>{tv.descripcion}</Text>
            <Text className='font-work-black'>${tv.precio}</Text>
            <View className='mx-5' style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image source={imagenDinamica} style={{ width: 300, height: 200}}/>
            </View>
        </View>
    );
};

export default TvDetailScreen;