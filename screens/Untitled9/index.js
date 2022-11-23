import { RadioGroup } from "react-native-radio-buttons-group";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled9 = () => {
  return <View style={_styles.faEsAjKL}>
      <Text style={_styles.MkVUwagG}>Lorem ipsum…</Text><RadioGroup style={_styles.sETKhMLi} radioButtons={[{
      id: "1",
      label: "Option 1",
      value: "option1"
    }, {
      id: "2",
      label: "Option 2",
      value: "option2"
    }]} layout="column"></RadioGroup></View>;
};

export default Untitled9;

const _styles = StyleSheet.create({
  faEsAjKL: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  MkVUwagG: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  sETKhMLi: {
    width: 120,
    height: 70
  }
});