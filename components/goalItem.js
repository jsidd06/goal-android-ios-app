import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const GoalItems = (props) => {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={styles.goalContainer}
    >
      <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalContainer: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#7743DB",
    margin: 5,
    borderRadius: 5,
  },
  goalText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
});
