import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PlacesList from "../components/PlacesList";
import { useGlobal } from "../context/globalContext";

const Home = ({ navigation }) => {
  const { places } = useGlobal();

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
        <View className="flex-row justify-between items-center">
          <View style={{ fontFamily: "Sora-SemiBold" }}>
            <Text
              style={{ fontFamily: "Sora-SemiBold" }}
              className="text-[#000000] text-[23px]"
            >
              Good Morning
            </Text>

            <LinearGradient
              colors={["#A07FCB", "#C284C7", "#FF8BBF"]}
              start={{ x: 0.1, y: 0.2 }}
              end={{ x: 1, y: 0.8 }}
              style={{
                marginTop: 10,
                width: 142,
                height: 48,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 32,
              }}
            >
              <Image
                source={require("../assets/medal.png")}
                style={{
                  width: 28,
                  height: 28,
                }}
              />
              <Text style={{ color: "white", fontFamily: "Sora" }}>
                850 points
              </Text>
            </LinearGradient>
          </View>

          <View className="flex-row gap-[15px] items-center">
            <Ionicons name="notifications-outline" size={32} color="#292D32" />
            <Image
              className="size-[64px]"
              source={require("../assets/userImg.png")}
            />
          </View>
        </View>

        <View className="mt-[30px] h-[250px] bg-[#380C72] rounded-[12px] px-[15px] py-[20px]">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-[#EBE7F1] font-sora600">
                Loyalty Points
              </Text>
              <Text className="text-[36px] font-sora700 text-white">
                850 <Text className="text-[18px]">Pts</Text>
              </Text>
            </View>
            <Image
              className="size-[71px]"
              source={require("../assets/gift.png")}
            />
          </View>
          <Text className="mt-[5px] text-[#EBE7F1] text-[12px] font-sora font-semibold">
            Earn more points and Enjoy exclusive benefits
          </Text>

          <View className="mt-auto h-[84px] bg-[#FFFFFF40] rounded-[8px] border border-[#FFFFFF59] backdrop-blur-[10px] flex-row items-center justify-between px-[10px]">
            <View>
              <Text className="text-[18px] font-sora700 text-white">
                Free 50 Points
              </Text>
              <Text className="text-[12px] text-[#EBE7F1] font-sora">
                Time Remaining: 10:02:33
              </Text>
            </View>
            <TouchableOpacity>
              <View className="w-[92px] h-[41px] bg-white rounded-[4px] flex justify-center items-center">
                <Text className="text-[#380C72] text-center font-sora">
                  Claim
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <PlacesList
          title="Fine Dining"
          navigation={navigation}
          places={places.dinings}
        />
        <PlacesList
          title="Restaurant"
          navigation={navigation}
          places={places.restaurants}
        />
        <PlacesList
          title="Steakhouse"
          navigation={navigation}
          places={places.steakhouses}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
