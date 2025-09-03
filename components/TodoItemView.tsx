import { FC } from "react";
import { View, Text } from "react-native";

interface TodoItemViewProps {
  route: {
    params: {
      id: number;
      text: string;
      completed: boolean;
    };
  };
}

export const TodoItemView: FC<TodoItemViewProps> = ({ route }) => {
  console.log(route.params?.completed);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Todo number {route.params.id}, {route.params.text} completed:
        {route.params.completed.toString()}
      </Text>
    </View>
  );
};
