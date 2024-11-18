import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, textStyles, containerStyles, isLoading}) => {
  return (
    <TouchableOpacity
    className={`rounded-xl px-4 min-h-[64px] ${containerStyles} bg-secondary justify-center items-center ${isLoading && 'opacity-50'}`}
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    >
      <Text className={`text-xl font-opmedium text-center text-secondary-100 ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton