import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItems from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [allEnteredGoal, setAllEnteredGoal] = useState([]);

  function submitGoalsHandler(enterGoal) {
    setAllEnteredGoal((pres) => [
      ...pres,
      { goal: enterGoal, id: Math.random().toString() },
    ]);
  }
  return (
    <View style={styles.container}>
      <GoalInput addGoal={submitGoalsHandler} />
      <View style={styles.textContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={allEnteredGoal}
          renderItem={(item) => {
            return <GoalItems text={item.item.goal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
  textContainer: {
    flex: 5,
    marginTop: 20,
  },
});
