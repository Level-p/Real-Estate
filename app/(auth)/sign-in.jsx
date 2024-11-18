import { Image, ScrollView } from 'react-native'
import { Text, View } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { images } from '../../constants'
import { Alert } from 'react-native'
import { getCurrentUser, signIn } from "../../lib/appwrite"
import { useGlobalContext } from "../../context/GlobalProvider"

const SignIn = () => {
  const {setUser, setIsLoggedIn} = useGlobalContext()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmiting, setIsSubmiting] = useState(false)
  const {email, password} = form

  const submit = async () => {
    if(!email || !password ) {
      Alert.alert("Incomplete", "Please fill in all fields")
      return
    }

    setIsSubmiting(true)

    try {
      await signIn(email, password)

      const result = await getCurrentUser()
      setUser(result)
      setIsLoggedIn(true)

      router.replace('/home')
    } catch (error) {
      Alert.alert("Error", error.message)
    } finally {
      setIsSubmiting(false)
    }
    
  }
  return (
    <SafeAreaView className="bg-slate-50 h-full">
      <ScrollView className="my-16 px-4">
        <View className="justify-center items-center space-y-8 my-2">
          <View className="space-y-5 mt-2">
            <Text className="text-4xl font-opbold text-gray-800 text-center">Sign In</Text>

            <Text className="text-base font-opsemibold line-clamp-2 text-gray-400 text-center mt-3 w-64">Welcome back. Use your email and password to log in</Text>
          </View>

          <FormField
          value={form.email}
          title='Sign in'
          otherStyles="mt-7"
          placeholder="Email"
          handleChangeText={(e) => setForm({...form, email:e})}
          />

        <FormField
          value={form.password}
          title='Password'
          otherStyles="mt-7"
          placeholder="Password"
          handleChangeText={(e) => setForm({...form, password: e})}
          />


          <View className="flex-row justify-center mt-7 ">
            <Text className="text-end text-base text-gray-800 font-opregular">
                Don't have an account? {' '}
            </Text>
            <Link href="/sign-up" className='text-base text-secondary font-opbold'>
              Sign up
            </Link>
          </View>

          
          <CustomButton
            title="Log in"
            containerStyles="w-full mt-3"
            textStyles="text-black"
            isLoading={isSubmiting}
            handlePress={submit}
          />

          <Image
          source={images.logoSmall}
          resizeMode='contain'
          className="w-16 h-16 mt-48"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn