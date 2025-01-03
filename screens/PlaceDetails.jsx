import { StatusBar as TopBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import RNPickerSelect from "react-native-picker-select";
import BackButton from "../components/BackButton";

const { width } = Dimensions.get("window");

const PlaceDetails = ({ navigation, route }) => {
  const { place } = route.params;

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      className="bg-[#ffffff]"
    >
      <TopBar style="light" />
      <Image style={{ width, height: 400 }} source={place.img} />

      <View
        style={{ width, height: 400 }}
        className="absolute top-0 left-0 bg-[#00000099]"
      ></View>

      <SafeAreaView
        style={{
          width,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        className="absolute mx-[15px]"
      >
        <BackButton navigation={navigation} />
      </SafeAreaView>

      <View className="px-[15px] pt-[20px]">
        <View className="flex-row items-center gap-[5px]">
          <Text className="flex-1 text-[20px] font-sora700 text-[#000000]">
            {place.name}
          </Text>
        </View>
        <View className="flex-row items-center gap-[5px]">
          <EvilIcons name="location" size={24} color="#646464" />
          <Text className="flex-1 font-sora600 text-[#646464]">
            {place.address}
          </Text>
        </View>
        <View className="mt-[20px] flex-row gap-[10px]">
          <TouchableOpacity>
            <View className="w-[90px] h-[40px] rounded-[40px] border border-[#B7B7B7] flex-row justify-center items-center gap-[5px]">
              <Ionicons name="heart-outline" size={20} color="#646464" />
              <Text className="text-[#646464] font-sora">Save</Text>
            </View>
          </TouchableOpacity>
          <View className="w-[106px] h-[40px] rounded-[40px] border border-[#B7B7B7] flex-row justify-center items-center gap-[5px]">
            <Image
              source={require("../assets/medal.png")}
              className="size-[20px]"
            />
            <Text className="text-[#646464] font-sora text-[15px]">100pts</Text>
          </View>
        </View>

        <View className="mt-[10px] flex-row items-center justify-between">
          <View className="flex-row items-center gap-[2px]">
            <FontAwesome name="users" size={20} color="#292D32" />
            <RNPickerSelect
              style={{
                inputAndroid: {
                  width: 150,
                  textDecorationColor: "#380C72",
                },
                inputIOS: {
                  width: 150,
                },
              }}
              onValueChange={(value) => setSelectedValue(value)}
              items={[
                { label: "1 Guest", value: "1" },
                { label: "2 Guests", value: "2" },
                { label: "3 Guests", value: "3" },
                { label: "4 Guests", value: "4" },
              ]}
              placeholder={{ label: "Guest?", value: null }}
            />
          </View>
          <View className="flex-row items-center gap-[7px]">
            <FontAwesome name="calendar" size={20} color="#380C72" />
            <Text className="font-sora text-[#380C72]">Today</Text>
          </View>
        </View>

        <View className="mt-[10px]">
          <Text className="text-[#646464] text-[18px] font-sora600">Lunch</Text>
          <View className="mt-[10px] flex-wrap flex-row justify-between">
            {Array.from({ length: 9 }).map((_, i) => (
              <View
                key={i}
                style={{
                  width: "30%",
                  height: 49,
                  backgroundColor: "#380C72",
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Sora-Bold" }}>
                  2:30pm
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mt-[10px]">
          <Text className="text-[#646464] text-[18px] font-sora600">
            Dinner
          </Text>
          <View className="mt-[10px] flex-wrap flex-row justify-between">
            {Array.from({ length: 9 }).map((_, i) => (
              <View
                key={i}
                style={{
                  width: "30%",
                  height: 49,
                  backgroundColor: "#380C72",
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: "white", fontFamily: "Sora-Bold" }}>
                  2:30pm
                </Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BookPlace", { navigation, place })
          }
        >
          <View className="mt-[15px] bg-[#380C72] h-[50px] justify-center items-center rounded-[4px]">
            <Text className="text-[18px] font-sora600 text-white">Proceed</Text>
          </View>
        </TouchableOpacity>

        <View className="mt-[20px]">
          <Text className="text-[18px] font-sora700">About {place.name}</Text>
          <Text className="mt-[5px] text-[#454545] font-sora">
            {place.about}
          </Text>
        </View>

        <View className="mt-[20px] border border-[#E8E8E8] rounded-[8px]">
          <View className="border-b border-b-[#E8E8E8] px-[15px] py-[20px] flex-row items-center gap-[20px]">
            <FontAwesome name="phone" size={18} color="#380C72" />
            <Text className="text-[#380C72] font-sora600">{place.phone}</Text>
          </View>
          <View className="px-[15px] py-[20px] flex-row items-center gap-[20px]">
            <FontAwesome5 name="globe" size={18} color="#380C72" />
            <Text className="text-[#380C72] font-sora600">{place.website}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;
