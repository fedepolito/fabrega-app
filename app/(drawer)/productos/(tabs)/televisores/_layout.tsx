import { Stack } from 'expo-router';

export default function TelevisoresStack() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="[id]" 
        options={{ 
          title: 'Detalle',
          headerShown: true
        }} 
      />
    </Stack>
  );
}