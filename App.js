import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enterGoal, setEnterGoal] = useState("");
  const [allEnteredGoal, setAllEnteredGoal] = useState([]);
  function addGoalsHandler(text) {
    setEnterGoal(text);
  }
  function submitGoalsHandler() {
    setAllEnteredGoal((pres) => [...pres, enterGoal]);
    setEnterGoal("");
  }
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={addGoalsHandler}
          placeholder="Enter your goals course"
          value={enterGoal}
        />
        <Button title="Add Goal" onPress={submitGoalsHandler} />
      </View>
      <View style={styles.textContainer}>
        {allEnteredGoal.map((goal, index) => (
          <Text key={index}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 20,
  },
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
  textContainer: {
    flex: 5,
    marginTop: 20,
  },
});
