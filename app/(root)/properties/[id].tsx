import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Property</Text>
    </View>
  );
};

export default Property;

const styles = StyleSheet.create({});
