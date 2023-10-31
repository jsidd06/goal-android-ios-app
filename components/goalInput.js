import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
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
    <Modal visible={props.isVisible} animationType="fade">
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={addGoalsHandler}
          placeholder="Enter your goals course"
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 2,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});
