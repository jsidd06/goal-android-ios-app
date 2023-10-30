import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput placeholder="Enter your goals course" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>Lets add goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
