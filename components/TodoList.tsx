import { View, FlatList, Text, StyleSheet } from "react-native";
import { TodoItem } from "./TodoItem";
import { Dispatch, FC, SetStateAction } from "react";
import { TodoItemI } from "../types";
import { Header } from "./Header";

interface TodoListProps {
  todos: TodoItemI[];
  setTodos: Dispatch<SetStateAction<TodoItemI[]>>;
}

export const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <FlatList
      data={todos}
      style={style.flatList}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      ListHeaderComponent={<Header todos={todos} setTodos={setTodos} />}
      ListEmptyComponent={() => (
        <Text style={{ textAlign: "center" }}>No Todos</Text>
      )}
      renderItem={({ item }) => (
        <TodoItem
          {...item}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      )}
    />
  );
};

const style = StyleSheet.create({
  flatList: {
    width: "100%",
    paddingTop: 100,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    flex: 1,
    gap: 30,
  },
});
