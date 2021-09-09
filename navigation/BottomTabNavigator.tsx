import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import TabOneScreen from '../screens/TabOneScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          headerShown: false,  
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
        // options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
        //   title: 'Tab One',
        //   tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        //   headerRight: () => (
        //     <Pressable
        //       onPress={() => navigation.navigate('Modal')}
        //       style={({ pressed }) => ({
        //         opacity: pressed ? 0.5 : 1,
        //       })}>
        //       <FontAwesome
        //         name="info-circle"
        //         size={25}
        //         color={Colors[colorScheme].text}
        //         style={{ marginRight: 15 }}
        //       />
        //     </Pressable>
        //   ),
        // })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="download" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
const HomeStack = createNativeStackNavigator<RootTabParamList>();

function TabOneNavigator(){
    return (
        <HomeStack.Navigator>
            {/* <HomeStack.Screen
            name = "MovieDetailScreen"
            component = {MovieDetailScreen}
            options={{
              title:''
              }}
            />  */}
            <HomeStack.Screen
            name = "HomeScreen"
            component = {HomeScreen}
            options={{
                headerShown: false
              }}
            /> 
        </HomeStack.Navigator>   
    )
}
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }

