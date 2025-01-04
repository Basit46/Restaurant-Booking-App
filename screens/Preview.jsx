import React, { useCallback, useRef } from "react";
import { StatusBar as TopBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../reducers/BookingsSlice";

const { width } = Dimensions.get("window");

const Preview = ({ navigation, route }) => {
  const { place } = route.params;
  const { user, bookDetails } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const handleBooking = () => {
    dispatch(addPlace({ ...place, ...bookDetails }));
    navigation.navigate("User");
  };

  return (
    <GestureHandlerRootView style={{ backgroundColor: "blue", flex: 1 }}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        className="bg-[#ffffff] flex-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <TopBar style="dark" />
          <View className="px-[15px]">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="left" size={28} color="black" />
            </TouchableOpacity>
            <Text className="text-[26px] font-sora700">
              Reservation Preview
            </Text>
            <Text className="font-sora text-[#646464]">
              Confirm if there are errors in the entered details.
            </Text>

            <View className="mt-[20px] flex-row gap-[10px]">
              <View
                className="rounded-[4px] overflow-hidden"
                style={{ width: width * 0.25, height: 100 }}
              >
                <Image
                  style={{ width: width * 0.25, height: 100 }}
                  source={place.img}
                />
              </View>
              <View>
                <Text className="font-sora600 text-[16px]">{place.name}</Text>
                <View className="mt-[5px] flex-row flex-wrap items-center gap-[5px]">
                  <EvilIcons name="location" size={16} color="#646464" />
                  <Text className="text-[14px] font-sora text-[#646464]">
                    {place.address}
                  </Text>
                </View>
                <View className="pb-[10px] mt-auto flex-row items-center gap-[5px]">
                  <FontAwesome name="users" size={20} color="#646464" />
                  <Text className="mr-[10px] text-[#646464]">
                    {bookDetails.guests} Guest{bookDetails.guests > 1 && "s"}
                  </Text>
                  <FontAwesome name="calendar" size={20} color="#646464" />
                  <Text className="text-[#646464]">
                    {" "}
                    {new Intl.DateTimeFormat("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    }).format(bookDetails.date)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View className="mt-[40px] border-t-[6px] border-t-[#FDFDFD] px-[15px] pt-[20px]">
            <Text className="mb-[10px] text-[20px] font-sora600 text-[#646464]">
              Dinner Details
            </Text>

            <Text className="label">Full Name</Text>
            <Text className="input-val">{user.name}</Text>

            <Text className="label">Email Address</Text>
            <Text className="input-val">{user.email}</Text>

            <Text className="label">Add a Special Request</Text>
            <Text className="input-val">{user.request}</Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View className="mt-[30px] border-[2px] border-[#380C72] h-[60px] justify-center items-center rounded-[4px]">
                <Text className="text-[18px] font-sora700 text-[#380C72]">
                  Edit Reservation Details
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBooking}>
              <View className="mt-[7px] bg-[#380C72] h-[60px] justify-center items-center rounded-[4px]">
                <Text className="text-[18px] font-sora700 text-white">
                  Confirm
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <BottomSheet
            snapPoints={["65%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
          >
            <BottomSheetView
              style={{ flex: 1, backgroundColor: "white", display: "none" }}
            >
              <Image
                className="w-full h-[200px]"
                source={require("../assets/confetti.png")}
              />
              <Image
                className="size-[106px] absolute left-1/2 -translate-x-1/2 top-[40px]"
                source={require("../assets/medal.png")}
              />

              <Text className="text-[36px] font-sora700 text-center">
                850 <Text className="text-[18px]">Pts</Text>
              </Text>
              <Text className="w-[80%] mx-auto text-[#646464] font-sora text-center">
                You have earned 100 Loyalty Points for the reservation done.
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("PlaceDetails")}
              >
                <View className="w-[80%] mx-auto mt-[15px] bg-[#380C72] h-[54px] justify-center items-center rounded-[4px]">
                  <Text className="text-[16px] font-sora700 text-white">
                    Make Another Reservation
                  </Text>
                </View>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Preview;
