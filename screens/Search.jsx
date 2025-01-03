import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useGlobal } from "../context/globalContext";

const { width, height } = Dimensions.get("window");

const Search = ({ navigation, route }) => {
  const { places } = useGlobal();

  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    if (value == "") {
      setResult([]);
      return;
    }
    const ALL_PLACES = [
      ...places.restaurants,
      ...places.steakhouses,
      ...places.dinings,
    ];

    setResult(
      ALL_PLACES.filter((place) =>
        place.name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

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
        <View className="h-[50px] px-[10px] flex-row items-center border border-gray-200 bg-gray-100 rounded-[6px]">
          <TextInput
            className="mr-[25px] font-sora text-black"
            placeholder="Search"
            placeholderTextColor="gray"
            autoCapitalize="none"
            autoFocus={true}
            value={text}
            onChangeText={(value) => {
              setText(value);
              handleSearch(value);
            }}
          />

          <TouchableWithoutFeedback onPress={() => setText("")}>
            <FontAwesome5
              className="absolute right-[10px] top-1/2 -translate-y-1/2"
              name="times"
              size={24}
              color="red"
            />
          </TouchableWithoutFeedback>
        </View>

        <View className="mt-[40px] gap-[40px] ">
          {result.length > 0 &&
            result.map((place, i) => (
              <View key={i} className="w-full gap-[6px]">
                <View
                  style={{ height: 203 }}
                  className="w-full rounded-[8px] overflow-hidden"
                >
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate("PlaceDetails", { place })
                    }
                  >
                    <Image
                      style={{ height: 203 }}
                      source={place.img}
                      className="w-full"
                    />
                  </TouchableWithoutFeedback>

                  <View className="absolute top-[10px] left-[10px] w-[87px] h-[46px] bg-[#380C72] rounded-[4px] flex-row justify-center items-center">
                    <Text className="text-[14px] font-sora700 text-white">
                      $
                    </Text>
                    <Text className="text-[23px] font-sora700 text-white">
                      {place.price}
                    </Text>
                  </View>
                  <View className="absolute top-[10px] right-[10px] size-[40px] rounded-full bg-[#D2D2D266] flex-row justify-center items-center">
                    <Ionicons name="heart" size={24} color="#FF002E" />
                  </View>
                </View>

                <View className="flex-row items-center gap-[5px]">
                  <Text className="flex-1 text-[16px] font-sora600 text-[#000000]">
                    {place.name}
                  </Text>
                  <FontAwesome
                    className=""
                    name="star"
                    size={20}
                    color="#FF6700"
                  />
                  <Text className="font-sora600 text-[#000000]">
                    {place.rating}
                  </Text>
                </View>
                <View className="flex-row items-center gap-[5px]">
                  <EvilIcons name="location" size={24} color="#646464" />
                  <Text className="flex-1 font-sora text-[#646464]">
                    {place.address}
                  </Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
