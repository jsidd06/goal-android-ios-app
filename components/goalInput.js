import { Button, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");
  function addGoalsHandler(text) {
    setEnterGoal(text);
  }
  const addHandler = () => {
    props.addGoal(enterGoal);
    setEnterGoal("");
  };
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={addGoalsHandler}
        placeholder="Enter your goals course"
        value={enterGoal}
      />
      <Button title="Add Goal" onPress={addHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    width: "75%",
    borderWidth: 1,
    borderRadius: 2,
    padding: 5,
  },
});
