import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = ({ taskText, index, setTasks }) => {
  const deleteTask = () => {
    setTasks((prevState) => {
      return prevState.filter((el, curIndex) => {
        return curIndex !== index;
      });
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={deleteTask}>
      <View style={styles.left}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{taskText}</Text>
      </View>
      <View style={styles.right} />
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    marginRight: 15,
    opacity: 0.4,
    backgroundColor: "#55BCF666",
  },
  text: {
    color: "#1A1A1A",
    fontSize: 14,
  },
  right: {
    width: 12,
    height: 12,
    borderColor: "#55BCF666",
    borderWidth: 2,
    borderRadius: 5,
  },
});
