import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const User = () => {
  const bookings = useSelector((state) => state.bookings.bookings);

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 bg-[#ffffff]"
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        className="px-[15px]"
      >
        <Text
          style={{ fontFamily: "Sora-SemiBold" }}
          className="text-[#000000] text-[23px]"
        >
          Omo Oba 👋,
        </Text>
        <Text className="mt-[20px] text-[#000000] text-[20px] font-sora">
          Your Bookings:
        </Text>

        <View className="mt-[10px] gap-[20px] ">
          {bookings.length > 0 &&
            bookings.map((place, i) => (
              <View key={i} className="w-full gap-[6px]">
                <View
                  style={{ height: 203 }}
                  className="w-full rounded-[8px] overflow-hidden"
                >
                  <Image
                    style={{ height: 203 }}
                    source={place.img}
                    className="w-full"
                  />

                  <View className="absolute top-[10px] left-[10px] w-[87px] h-[46px] bg-[#380C72] rounded-[4px] flex-row justify-center items-center">
                    <Text className="text-[14px] font-sora700 text-white">
                      $
                    </Text>
                    <Text className="text-[23px] font-sora700 text-white">
                      {place.price}
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center gap-[5px]">
                  <Text className="flex-1 text-[16px] font-sora600 text-[#000000]">
                    {place.name}
                  </Text>
                </View>
                <View className="flex-row items-center gap-[5px]"></View>

                <View className="pb-[10px] mt-auto flex-row items-center gap-[5px]">
                  <FontAwesome name="users" size={20} color="#646464" />
                  <Text className="mr-[10px] text-[#646464]">
                    {place.guests} Guest{place.guests > 1 && "s"}
                  </Text>
                  <FontAwesome name="calendar" size={20} color="#646464" />
                  <Text className="text-[#646464]">
                    {place.date} - {place.time}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
