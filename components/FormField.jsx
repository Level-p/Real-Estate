import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import {FaMailchimp} from "react-icons/fa6"
import { TouchableOpacity } from 'react-native'
import { icons } from "../constants"

const FormField = ({title, value, placeholder,  handleChangeText, otherStyles, isLoading}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`bg-white ${otherStyles} px-4 rounded-2xl w-full  h-16 bg-white flex-row items-center justify-center gap-3`}>
      <TextInput
      className="text-xl flex-1 font-opsemibold text-gray-800"
      value={value}
      placeholderTextColor="#ccc"
      placeholder={placeholder}
      onChangeText={handleChangeText}
      secureTextEntry={title === "Password" && !showPassword}
      />

        {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                source={!showPassword? icons.eye : icons.eyeHide}
                className="w-7 h-7"
                resizeMode='contain'
                />
            </TouchableOpacity>
        )}

    </View>
  )
}

export default FormField