import { Image, ScrollView } from 'react-native'
import { Text, View } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { images } from '../../constants'
import { Alert } from 'react-native'

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    agentID: ''
  })
  
  const {email, password, confirmPassword, name, agentID} = form

  const submit = async () => {
    if(!email || !password || !confirmPassword || !name) {
      Alert.alert("Incomplete", "Please fill in all fields")
    }

    if( password !== confirmPassword) {
      Alert.alert("Password", "Passwords do not match")
    }
    
  }
  return (
    <SafeAreaView className="bg-slate-50 h-full">
      <ScrollView className="my-8 px-4">
        <View className="justify-center items-center space-y-8 my-2">
          <View className="space-y-5 mt-2">
            <Text className="text-4xl font-opbold text-gray-800 text-center">We Say Hi!</Text>

            <Text className="text-lg font-opbold text-gray-400 text-center mt-3 w-64">Welcome back. Create account</Text>
          </View>

          <FormField
          value={form.name}
          title='Name'
          otherStyles="mt-7"
          placeholder="Name"
          handleChangeText={(e) => setForm({...form, name:e})}
          />

          <FormField
          value={form.email}
          title='Email'
          otherStyles="mt-7"
          placeholder="Email"
          handleChangeText={(e) => setForm({...form, email:e})}
          />
          <FormField
          value={form.password}
          title='Password'
          otherStyles="mt-7"
          placeholder="Create Password"
          handleChangeText={(e) => setForm({...form, password:e})}
          />

        <FormField
          value={form.confirmPassword}
          title='Password'
          otherStyles="mt-7"
          placeholder="Re-type Password"
          handleChangeText={(e) => setForm({...form, confirmPassword: e})}
          />

        <FormField
          value={form.agentID}
          title='Agent ID'
          otherStyles="mt-7"
          placeholder="Agent ID (optional)"
          handleChangeText={(e) => setForm({...form, agentID: e})}
          />


          <View className="flex-row justify-center mt-7 ">
            <Text className="text-end text-base text-gray-800 font-opregular">
                already have an account? {' '}
            </Text>
            <Link href="/sign-in" className='text-base text-secondary-200 font-opbold'>
              Sign in
            </Link>
          </View>

          
          <CustomButton
            title="Sign up"
            containerStyles="w-full mt-3"
            textStyles="text-black"
            handlePress={submit}
          />

          <Image
          source={images.logoSmall}
          resizeMode='contain'
          className="w-16 h-16 mt-6"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp