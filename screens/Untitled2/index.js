import { RadioGroup } from "react-native-radio-buttons-group";
import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import { Switch } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = () => {
  return <View style={_styles.jDxDnbud}>
      <TextInput style={_styles.UcdNGObB}></TextInput><FlatList style={_styles.wBpEvWWY} renderItem={() => <View style={_styles.whuKyQmu}><Switch style={_styles.aqcVvaxr}></Switch></View>} ItemSeparatorComponent={() => <View style={_styles.mOYjOczd} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><ActivityIndicator style={_styles.PUDBoCBK}></ActivityIndicator><CheckBox style={_styles.MvdOpJWt} title="Checkbox Title"></CheckBox><Slider style={_styles.RQNYIXOv} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><RadioGroup style={_styles.yvhcwVcK} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  jDxDnbud: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  UcdNGObB: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  wBpEvWWY: {
    position: "absolute",
    width: 100,
    height: 150
  },
  whuKyQmu: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  mOYjOczd: {
    backgroundColor: "#000000",
    height: 1
  },
  aqcVvaxr: {
    width: 50,
    height: 25
  },
  PUDBoCBK: {
    width: 50,
    height: 50
  },
  MvdOpJWt: {
    width: 183,
    height: 69
  },
  RQNYIXOv: {
    width: 150,
    height: 40
  },
  yvhcwVcK: {
    width: 120,
    height: 70
  }
});