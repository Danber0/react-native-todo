import { TodoItemView, TodoList } from "./components";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator({
  screens: {
    TodoList: {
      screen: TodoList,
      options: { headerShown: false },
    },
    TodoItemView: {
      screen: TodoItemView,
      options: {
        headerBackButtonDisplayMode: "generic",
        headerTitle: "",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
