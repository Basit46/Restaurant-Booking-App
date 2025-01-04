import React, { useState } from "react";
import { StatusBar as TopBar } from "expo-status-bar";
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../reducers/BookingsSlice";

const { width } = Dimensions.get("window");

const BookPlace = ({ navigation, route }) => {
  const { place } = route.params;

  const { date, guests } = useSelector((state) => state.bookings.bookDetails);
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    request: "",
  });

  const handleReserve = () => {
    // Validation
    if (!userDetails.name.trim()) {
      Alert.alert("Validation Error", "Name is required.");
      return;
    }
    if (!userDetails.email.trim()) {
      Alert.alert("Validation Error", "Email is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userDetails.email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return;
    }

    dispatch(addUserDetails(userDetails));
    navigation.navigate("Preview", { place });
  };

  return (
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
          <Text className="text-[26px] font-sora700">Confirm Booking</Text>
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
                  {guests} Guest{guests > 1 && "s"}
                </Text>
                <FontAwesome name="calendar" size={20} color="#646464" />
                <Text className="text-[#646464]">{date}</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="mt-[40px] border-t-[6px] border-t-[#FDFDFD] px-[15px] pt-[20px]">
          <Text className="mb-[10px] text-[20px] font-sora600 text-[#646464]">
            Dinner Details
          </Text>

          <Text className="label">Full Name</Text>
          <TextInput
            className="input-style"
            placeholder="Enter your full name"
            placeholderTextColor="#B3B3B3"
            value={userDetails.name}
            onChangeText={(value) =>
              setUserDetails({ ...userDetails, name: value })
            }
          />

          <Text className="label">Email Address</Text>
          <TextInput
            className="input-style"
            placeholder="Enter your Email Address"
            placeholderTextColor="#B3B3B3"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={userDetails.email}
            onChangeText={(value) =>
              setUserDetails({ ...userDetails, email: value })
            }
          />

          <Text className="label">Add a Special Request (Optional)</Text>
          <TextInput
            className="input-style"
            placeholder="Enter your Special Request"
            placeholderTextColor="#B3B3B3"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            multiline={true}
            style={{ height: 150 }}
            textAlignVertical="top"
            value={userDetails.request}
            onChangeText={(value) =>
              setUserDetails({ ...userDetails, request: value })
            }
          />

          <Text className="mt-[15px] font-sora">
            By clicking “Reserve Now” you agree to the{" "}
            <Text className="text-[#380C72]">Terms of Use</Text> and{" "}
            <Text className="text-[#380C72]">Privacy Policy</Text>.
          </Text>

          <TouchableOpacity onPress={handleReserve}>
            <View className="mt-[15px] bg-[#380C72] h-[60px] justify-center items-center rounded-[4px]">
              <Text className="text-[18px] font-sora700 text-white">
                Reserve Now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookPlace;
