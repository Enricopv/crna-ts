import * as React from "react";
import { createStackNavigator } from "react-navigation";
import { Main } from './pages'

const AppStack = createStackNavigator(
  {
    Main
  },
  {
    headerMode: "none",
    initialRouteName: "Main"
  }
);

export default AppStack
