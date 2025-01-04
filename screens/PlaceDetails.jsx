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
  TextInput,
  Alert,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import RNPickerSelect from "react-native-picker-select";
import BackButton from "../components/BackButton";
import { useDispatch } from "react-redux";
import { addDetails } from "../reducers/BookingsSlice";

const { width } = Dimensions.get("window");

const PlaceDetails = ({ navigation, route }) => {
  const { place } = route.params;
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState("");

  const [guests, setGuests] = useState("");

  const handleProceed = () => {
    if (guests != "") {
      dispatch(
        addDetails({
          guests,
          date: new Date(),
          time: new Date().toLocaleTimeString(),
        })
      );
      navigation.navigate("BookPlace", { navigation, place });
    } else {
      Alert.alert("Empty Details", "Enter appropriate values omo oba");
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      className="bg-[#ffffff]"
    >
      <TopBar style="light" />
      <Image style={{ width, height: 300 }} source={place.img} />

      <View
        style={{ width, height: 300 }}
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
        <View className="mt-[10px]">
          <Text className="text-[18px] font-sora700">About {place.name}</Text>
          <View className="flex-row items-center gap-[5px]">
            <EvilIcons name="location" size={24} color="#646464" />
            <Text className="flex-1 font-sora600 text-[#646464]">
              {place.address}
            </Text>
          </View>
          <Text className="mt-[5px] text-[#454545] font-sora">
            {place.about}
          </Text>
        </View>

        <View className="mt-[30px] gap-[10px]">
          <View className="w-full h-[45px] border border-[#646464] flex-row items-center px-[10px] gap-[5px]">
            <FontAwesome name="users" size={20} color="#292D32" />
            <TextInput
              className="flex-1"
              placeholder="How many guest (Max 9)"
              placeholderTextColor="#B3B3B3"
              keyboardType="numeric"
              value={guests}
              onChangeText={(value) => setGuests(value)}
              maxLength={1}
            />
          </View>
          <View className="w-full h-[45px] border border-[#646464] flex-row items-center px-[10px] gap-[5px]">
            <FontAwesome name="calendar" size={20} color="#292D32" />
            <TextInput
              className="flex-1"
              placeholder="Date"
              placeholderTextColor="#B3B3B3"
              keyboardType="numeric"
            />
          </View>
          <View className="w-full h-[45px] border border-[#646464] flex-row items-center px-[10px] gap-[5px]">
            <FontAwesome name="users" size={20} color="#292D32" />
            <TextInput
              className="flex-1"
              placeholder="Time"
              placeholderTextColor="#B3B3B3"
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity onPress={handleProceed}>
          <View className="mt-[15px] bg-[#380C72] h-[50px] justify-center items-center rounded-[4px]">
            <Text className="text-[18px] font-sora600 text-white">Proceed</Text>
          </View>
        </TouchableOpacity>

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
