import { Switch } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled7 = () => {
  return <View style={_styles.mEsZGGNz}>
      <TextInput style={_styles.dtOhnfXT}></TextInput><FlatList style={_styles.GBAfkONW} renderItem={() => <View style={_styles.hjdPYwaV}><ActivityIndicator style={_styles.NvNwkJxg}></ActivityIndicator></View>} ItemSeparatorComponent={() => <View style={_styles.gCCXQpwK} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><Slider style={_styles.skGXcAxF} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><RadioGroup style={_styles.UvxFVqqr} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup><Switch style={_styles.qArZuyFR}></Switch></View>;
};

export default Untitled7;

const _styles = StyleSheet.create({
  mEsZGGNz: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  dtOhnfXT: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  GBAfkONW: {
    position: "absolute",
    width: 100,
    height: 150
  },
  hjdPYwaV: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  gCCXQpwK: {
    backgroundColor: "#000000",
    height: 1
  },
  NvNwkJxg: {
    width: 50,
    height: 50
  },
  skGXcAxF: {
    width: 150,
    height: 40
  },
  UvxFVqqr: {
    width: 120,
    height: 70
  },
  qArZuyFR: {
    width: 50,
    height: 25
  }
});