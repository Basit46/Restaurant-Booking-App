import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Search from "./screens/Search";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlaceDetails from "./screens/PlaceDetails";
import BookPlace from "./screens/BookPlace";
import Preview from "./screens/Preview";
import GlobalProvider from "./context/globalContext";
import User from "./screens/User";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookPlace"
        component={BookPlace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Preview"
        component={Preview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExploreScreen"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookPlace"
        component={BookPlace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Preview"
        component={Preview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PlaceDetails"
        component={PlaceDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookPlace"
        component={BookPlace}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Preview"
        component={Preview}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [loaded, error] = useFonts({
    "Sora-Regular": require("./assets/fonts/Sora-Regular.ttf"),
    "Sora-SemiBold": require("./assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Bold": require("./assets/fonts/Sora-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,

            tabBarActiveTintColor: "#380C72",
            tabBarInactiveTintColor: "#949494",
            tabBarStyle: {
              // display: "none",
              backgroundColor: "white",
              elevation: 0,
              shadowOpacity: 0,
              borderTopWidth: 0,
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={StackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreStackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <FontAwesome6 name="wpexplorer" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchStackNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <Feather name="search" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={User}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="user" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
}
