import { Tabs } from 'expo-router'
import { View, Text, Image } from 'react-native'
import { icons } from '../../constants'
import { StatusBar } from 'expo-status-bar'

const TabIcon = ({icon, name, focused, color}) => {
  return <View className={`items-center justify-center gap-2 ${focused && 'border rounded-[100%] w-16 h-16 bg-slate-800'}`}>
    <Image
    source={icon}
    resizeMode='contain'
    tintColor={color}
    className="w-6 h-6"
    />
    {/* <Text className={`text-xs truncate ${focused ? 'font-opmedium' : 'font-opregular'} ${color}`}>{name}</Text> */}
  </View>
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFBF00',
        tabBarInactiveTintColor: '#7777',
        tabBarStyle: {
          backgroundColor: "#ffff",
          // borderTopWidth: 1,
          // borderTopColor: "#3C565B",
          height: 70,
          paddingTop: 13,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 25,
          marginBottom: 10
        }
      }}
      >
        <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown:false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon
            icon={icons.home}
            focused={focused}
            color={color}
            name="home"
            />
          )
        }}
        />

      <Tabs.Screen
        name="find"
        options={{
          title: "Find",
          headerShown:false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon
            icon={icons.search}
            focused={focused}
            color={color}
            name="search"
            />
          )
        }}
        />

         <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown:false,
            tabBarIcon: ({focused, color}) => (
              <TabIcon
              icon={icons.plus}
              focused={focused}
              color={color}
              name="create"
              />
            )
          }}
        />

         <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              headerShown:false,
              tabBarIcon: ({focused, color}) => (
                <TabIcon
                icon={icons.profile}
                focused={focused}
                color={color}
                name="profile"
                />
              )
            }}
        />       
      </Tabs>

      <StatusBar backgroundColor="#fff" style="auto"/>
    </>
  )
}

export default TabsLayout