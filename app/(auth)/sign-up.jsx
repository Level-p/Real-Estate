import { Image, ScrollView } from 'react-native'
import { Text, View } from 'react-native'
import {SafeAreaView} from "react-native-safe-area-context"
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { images } from '../../constants'
import { Alert } from 'react-native'
import { createUser } from "../../lib/appwrite"
import { useGlobalContext } from "../../context/GlobalProvider"

const SignUp = () => {
  
  const {setUser, setIsLoggedIn} = useGlobalContext()
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    agentID: ''
  })
  const [isSubmiting, setIsSubmiting] = useState(false)
  
  const {email, password, confirmPassword, username, agentID} = form

  const submit = async () => {
    if(!email || !password || !confirmPassword || !username) {
      Alert.alert("Incomplete", "Please fill in all fields")
      return
    }

    if( password !== confirmPassword) {
      Alert.alert("Password", "Passwords do not match")
      return
    }
    
    setIsSubmiting(true)

    try {
      const result = await createUser(username, email, password, agentID)
      setUser(result)
      setIsLoggedIn(true)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmiting(false)
    }
    
  }
  return (
    <SafeAreaView className="bg-slate-50 h-full">
      <ScrollView className="my-8 px-4">
        <View className="justify-center items-center space-y-8 my-2">
          <View className="space-y-5 mt-2">
            <Text className="text-4xl font-opbold text-gray-800 text-center">Sign Up</Text>

            <Text className="text-lg font-opbold text-gray-400 text-center mt-3 w-64">Welcome back. Create account</Text>
          </View>

          <FormField
          value={form.username}
          title='Username'
          otherStyles="mt-7"
          placeholder="Username"
          handleChangeText={(e) => setForm({...form, username:e})}
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
            <Link href="/sign-in" className='text-base text-secondary font-opbold'>
              Sign in
            </Link>
          </View>

          
          <CustomButton
            title="Sign up"
            containerStyles="w-full mt-3"
            textStyles="text-black"
            handlePress={submit}
            isLoading={isSubmiting}
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