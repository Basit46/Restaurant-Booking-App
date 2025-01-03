import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const PlacesList = ({ title, exploreScreen, navigation, places }) => {
  return (
    <View className="mt-[30px]">
      <View className="mb-[15px] flex-row justify-between items-center">
        <Text className="text-[#000000] font-sora700 text-[20px]">{title}</Text>

        {!exploreScreen && (
          <TouchableOpacity
            onPress={() => navigation.navigate("Explore", { title })}
          >
            <View className="flex-row gap-[5px] items-center">
              <View>
                <Text className="text-[#380C72] font-sora600">See all</Text>
              </View>

              <MaterialIcons
                name="arrow-forward-ios"
                size={12}
                color="#380C72"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {places.length > 0 &&
          places
            .filter((place, i) => (exploreScreen ? place : i < 3))
            .map((place, i) => (
              <View
                key={i}
                className="gap-[6px] mr-[30px]"
                style={{ width: width * 0.8 }}
              >
                <View
                  style={{ width: width * 0.8, height: 203 }}
                  className="rounded-[8px] overflow-hidden"
                  st
                >
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate("PlaceDetails", { place })
                    }
                  >
                    <Image
                      style={{ width: width * 0.8, height: 203 }}
                      source={place.img}
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
      </ScrollView>
    </View>
  );
};

export default PlacesList;
