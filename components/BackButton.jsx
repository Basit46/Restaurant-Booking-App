import React from "react";
import { TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View className="size-[40px] bg-[#00000099] rounded-[2px] flex-row justify-between items-center">
        <AntDesign className="mx-auto" name="left" size={28} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
