import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images"
import CustomButton from "../components/CustomButton"
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function Index() {
  const {isLoading, isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="px-4 my-2">
        <View className="w-full h-full items-center justify-center px-4">
             <Image
                source={images.logo}
                className="w-[290px] h-[220px]"
                resizeMode="contain"
              />

              <Image
                source={images.cards}
                className="max-w-[380px] w-full h-[300px] shadow-xl"
                resizeMode="cover"
              />

                <Text className="text-xl font-opsemibold text-center mb-5 text-gray-500">Explore your possible new home</Text>
              
              <CustomButton
              title="Get Started!"
              containerStyles="w-full mt-3"
              textStyles="text-black"
              handlePress={() => router.push('/sign-in')}
              />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#fff" style="auto"/>
    </SafeAreaView>
  );
}
