import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Task from "./components/Task";
import AddTask from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState(["first task", "second task"]);

  useEffect(() => {
    (async () => {
      const storage = await AsyncStorage.getItem("tasks");
      if (storage) {
        setTasks(JSON.parse(storage));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    })();
  }, [tasks]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.heading}>Today’s tasks</Text>
          <FlatList
            style={styles.taskContainer}
            data={tasks}
            renderItem={({ item, index }) => (
              <Task
                index={index}
                taskText={item}
                tasks={tasks}
                setTasks={setTasks}
              />
            )}
            keyExtractor={(item, index) => index}
          ></FlatList>
        </View>
        <AddTask tasks={tasks} setTasks={setTasks} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    gap: 30,
    height: "100%",
    width: "100%",
    backgroundColor: "#E8EAED",
    paddingHorizontal: 20,
  },
  top: {
    paddingTop: 94,
    gap: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskContainer: {
    height: "75%",
  },
});
