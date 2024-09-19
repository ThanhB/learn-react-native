import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // Corrected here
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setListOfGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.view1}>
        <TextInput
          placeholder="My course goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goals" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalView}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  view1: {
    // display: 'flex',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 4,
    paddingTop: 6,
  },
  goalText: {
    color: "black",
  },
  goalView: {
    borderRadius: 6,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f2f2f2",
    borderColor: "#cccccc",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between", // Center horizontally
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
