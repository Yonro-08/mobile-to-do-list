import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const AddTask = ({ tasks, setTasks }) => {
  const [textInput, setTextInput] = useState("");

  const addTask = () => {
    if (textInput && textInput.trim() !== "") {
      const newTasks = [...tasks, textInput];

      setTasks(newTasks);
      setTextInput("");
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform === "ios" ? "position" : "height"}>
      <View style={styles.addTaskContainer}>
        <TextInput
          value={textInput}
          placeholder="Write a task"
          placeholderTextColor="#C0C0C0"
          style={[styles.textInput, !textInput && styles.centredText]}
          onChangeText={(text) => setTextInput(text)}
        />
        <TouchableOpacity onPress={addTask}>
          <View style={styles.addButton}>
            <Icon name="add-sharp" size={32} />
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  addTaskContainer: {
    position: "absolute",
    bottom: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  textInput: {
    width: "75%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 60,
    backgroundColor: "#FFF",
  },
  centredText: {
    textAlign: "center",
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 52,
  },
});
