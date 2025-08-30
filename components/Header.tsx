import { Dispatch, FC, SetStateAction } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
import { COLORS } from "../colors";
import { TodoItemI } from "../types";

interface HeaderProps {
  todos: TodoItemI[];
  setTodos: Dispatch<SetStateAction<TodoItemI[]>>;
}

export const Header: FC<HeaderProps> = ({ todos, setTodos }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (!text.trim()) return;

    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

    setTodos((prev) => [...prev, { id: nextId, text, completed: false }]);
    setText("");
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.TextHeader}>Todo List</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 10,
        }}
      >
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Enter todo"
          style={style.input}
          placeholderTextColor={"#1c1c1c"}
        />
        <Pressable onPress={handleAddTodo}>
          <Image
            style={style.addButton}
            source={require("../assets/plus.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  TextHeader: {
    fontSize: 35,
    fontWeight: "bold",
    color: COLORS.primaryColor,
    textAlign: "center",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primaryColor,
    padding: 10,
    color: COLORS.primaryColor,
  },
  addButton: {
    width: 35,
    height: 35,
  },
});
