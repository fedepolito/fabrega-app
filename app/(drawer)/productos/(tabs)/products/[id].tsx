import { products } from '@/store/products.store';
import { useNavigation } from '@react-navigation/native';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import rutas from './rutas';

const ProductScreen = () => {

    const { id } = useLocalSearchParams();
    const product = products.find((p) => p.id === id);

    let imagenDinamica;
    switch (product?.foto) {
      case 'imagen1': imagenDinamica = rutas['imagen1']; break;
      case 'imagen2': imagenDinamica = rutas['imagen2']; break;
      case 'imagen3': imagenDinamica = rutas['imagen3']; break;
      case 'imagen4': imagenDinamica = rutas['imagen4']; break;
      case 'imagen5': imagenDinamica = rutas['imagen5']; break;
    }

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          tittle: product ?.titulo ?? 'Producto',
        });
      }, [product]);

    if (!product) {
        return <Redirect href='/home' />
    }
        

  return (
    <View className='px-5 mt-2'>
      <Text className='font-work-black text-2xl'>{product.titulo}</Text>
      <Text className=''>{product.descripcion}</Text>
      <Text className='font-work-black'>{product.precio}</Text>
      <View className='mx-5' style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={imagenDinamica} style={{ width: 300, height: 200}}/>
      </View>
    </View>
  )
}

export default ProductScreen