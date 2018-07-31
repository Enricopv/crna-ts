import * as React from "react";
import { createStackNavigator, createTabNavigator } from "react-navigation";
import { Main, Detail } from './stacks'
import { Signup, Login, ForgotPassword } from './stacks/AuthStack'

const HomeStack = createStackNavigator(
  {
    Main,
    Detail
  },
  {
    initialRouteName: "Main"
  }
);

// const TabStack = createTabNavigator(
//   {

//   }
// )

const AuthStack = createStackNavigator(
  {
    Login,
    Signup,
    ForgotPassword
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

const AppStack = createStackNavigator(
  {
    AuthStack,
    HomeStack
  },
  {
    headerMode: "none",
    initialRouteName: "AuthStack"
  }
)

export default AppStack
