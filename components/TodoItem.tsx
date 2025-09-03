import { FC } from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../colors";
import { useNavigation } from "@react-navigation/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
  const navigation = useNavigation();

  const handlePress = (id: number) => {
    //@ts-ignore
    navigation.navigate("TodoItemView", { id, text, completed });
  };

  return (
    <Pressable onPress={() => handlePress(id)}>
      <View style={style.todoItem}>
        <BouncyCheckbox
          size={25}
          fillColor="black"
          innerIconStyle={{ borderWidth: 2 }}
          onPress={() => {
            handleCompleteTodo(id);
          }}
          textComponent={
            <Text style={completed ? style.todoTextCompleted : style.todoText}>
              {text}
            </Text>
          }
        />
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
  todoText: {
    marginLeft: 10,
  },
  todoTextCompleted: {
    marginLeft: 10,
    textDecorationLine: "line-through",
    color: COLORS.secondaryColor,
  },
});
