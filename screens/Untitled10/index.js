import { Slider } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled10 = () => {
  return <View style={_styles.hLnxwSiU}>
      <TextInput style={_styles.qrHDeXGt}></TextInput><FlatList style={_styles.DdzAypfs} renderItem={() => <View style={_styles.TLwtcHWr}><ActivityIndicator style={_styles.UfJhLXkJ}></ActivityIndicator></View>} ItemSeparatorComponent={() => <View style={_styles.EhwHGekY} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><Slider style={_styles.RUHobOrY} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider></View>;
};

export default Untitled10;

const _styles = StyleSheet.create({
  hLnxwSiU: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  qrHDeXGt: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  DdzAypfs: {
    position: "absolute",
    width: 100,
    height: 150
  },
  TLwtcHWr: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  EhwHGekY: {
    backgroundColor: "#000000",
    height: 1
  },
  UfJhLXkJ: {
    width: 50,
    height: 50
  },
  RUHobOrY: {
    width: 150,
    height: 40
  }
});