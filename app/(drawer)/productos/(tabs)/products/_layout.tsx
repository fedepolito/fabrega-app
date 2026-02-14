// productos/(tabs)/products/_layout.tsx
import { Stack } from 'expo-router';

export default function ProductStack() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false // ← Oculta el header con "Productos"
        }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: 'Detalle',
          headerShown: true // ← Mantiene header en detalle
        }} 
      />
    </Stack>
  );
}