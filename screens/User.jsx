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

const User = ({ navigation }) => {
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
        <Text
          style={{ fontFamily: "Sora-SemiBold" }}
          className="text-[#000000] text-[23px]"
        >
          Omo Oba 👋,
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
