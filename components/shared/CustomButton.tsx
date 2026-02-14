import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contenido' | 'solo-texto';
  className?: string;
}

const CustomButton = ({
  children,
  color = 'primary',
  onPress,
  onLongPress,
  variant = 'contenido',
  className = '',
  ...pressableProps
}: Props) => {
  if (variant === 'solo-texto') {
    let textColor = 'text-primary';
    if (color === 'secondary') textColor = 'text-secondary';
    if (color === 'tertiary') textColor = 'text-tertiary';

    return (
      <Pressable 
        onPress={onPress} 
        onLongPress={onLongPress}
        className={`flex-1 ${className}`}
        {...pressableProps}
      >
        {({ pressed }) => (
          <View className={`p-3 ${pressed ? 'opacity-70' : ''}`}>
            <Text className={`text-center ${textColor} font-work-medium`}>
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    );
  }

  let bgColor = 'bg-primary';
  if (color === 'secondary') bgColor = 'bg-secondary';
  if (color === 'tertiary') bgColor = 'bg-tertiary';

  return (
    <Pressable 
      onPress={onPress} 
      onLongPress={onLongPress}
      className={`flex-1 ${className}`}
      {...pressableProps}
    >
      {({ pressed }) => (
        <View className={`
          flex-1 justify-center items-center
          rounded-xl ${bgColor} 
          ${pressed ? 'opacity-70' : ''}
          overflow-hidden
        `}>
          <Text className="text-white text-center font-work-medium text-base">
            {children}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default CustomButton;