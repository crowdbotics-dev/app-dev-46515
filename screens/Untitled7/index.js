import { FlatList } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled7 = () => {
  return <View style={_styles.grJuBCge}>
      <Text style={_styles.UceqMHoJ}>Lorem ipsum…</Text><TextInput style={_styles.PSgBxpbj}></TextInput><Switch style={_styles.fiSEWtbS}></Switch><RadioGroup style={_styles.ctiaOFHC} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup><FlatList style={_styles.SSGlWuMG} renderItem={() => <View style={_styles.ZeUMEMeU}></View>} ItemSeparatorComponent={() => <View style={_styles.PymwJGuB} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></View>;
};

export default Untitled7;

const _styles = StyleSheet.create({
  grJuBCge: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  UceqMHoJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  PSgBxpbj: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  fiSEWtbS: {
    width: 50,
    height: 25
  },
  ctiaOFHC: {
    width: 120,
    height: 70
  },
  SSGlWuMG: {
    position: "absolute",
    width: 100,
    height: 150
  },
  ZeUMEMeU: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  PymwJGuB: {
    backgroundColor: "#000000",
    height: 1
  }
});