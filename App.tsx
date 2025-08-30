import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { TodoList } from "./components";
import { COLORS } from "./colors";
import { useState } from "react";
import { TodoItemI } from "./types";

const defaultTodos = [
  {
    id: 1,
    text: "Todo 1",
    completed: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState<TodoItemI[]>(defaultTodos);

  return (
    <View style={style.container}>
      <TodoList todos={todos} setTodos={setTodos} />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    alignItems: "center",
    justifyContent: "center",
  },
});
