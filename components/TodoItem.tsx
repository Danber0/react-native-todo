import { FC, useRef } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../colors";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  handleDeleteTodo: (id: number) => void;
  handleCompleteTodo: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  text,
  completed,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  const lastPress = useRef(0);

  const handlePress = (id: number) => {
    const time = Date.now();
    const delta = time - lastPress.current;

    if (delta < 300) {
      handleCompleteTodo(id);
    }

    lastPress.current = time;
  };

  return (
    <Pressable onPress={() => handlePress(id)}>
      <View style={style.todoItem}>
        <Text style={completed && style.todoTextCompleted}>{text}</Text>
        <Pressable onPress={() => handleDeleteTodo(id)}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../assets/cross.png")}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: COLORS.primaryColor,
    borderRadius: 10,
    padding: 10,
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: COLORS.secondaryColor,
  },
});
