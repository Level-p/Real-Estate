import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: '100'}}>
      <View className="items-center justify-center flex-1 h-56">
          <Text className="text-3xl ">Ok Lobotka</Text>
      </View>
      </ScrollView>

      <StatusBar backgroundColor="#FFE5B4" style="auto"/>
    </SafeAreaView>
  );
}
