import React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import PlacesList from "../components/PlacesList";
import { useGlobal } from "../context/globalContext";

const Explore = ({ navigation, route }) => {
  const title = route.params?.title;
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
        <Text>
          <Text
            style={{ fontFamily: "Sora-SemiBold" }}
            className="text-[#000000] text-[23px]"
          >
            Explore {title}
          </Text>
        </Text>

        <PlacesList
          title="Fine Dining"
          navigation={navigation}
          exploreScreen
          places={places.dinings}
        />
        <PlacesList
          title="Restaurant"
          navigation={navigation}
          exploreScreen
          places={places.restaurants}
        />
        <PlacesList
          title="Steakhouse"
          navigation={navigation}
          exploreScreen
          places={places.steakhouses}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;
