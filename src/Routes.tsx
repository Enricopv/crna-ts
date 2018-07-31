import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { ForgotPassword, Login, Signup } from "./stacks/AuthStack";
import { Detail, Main } from "./stacks/HomeStack";
import { Options, Profile } from "./stacks/ProfileStack";
// import { Logo, NotificationsButton } from './stacks/components'

const HomeStack = createStackNavigator(
  {
    Main,
    Detail
  },
  {
    initialRouteName: "Main",
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: 'white'},
      title: 'Feed',
      // headerTitle: <Logo/>,
      // headerRight: <NotificationsButton navigation={navigation}/>
    })
  }
);

const ProfileStack = createStackNavigator(
  {
    Options,
    Profile
  },
  {
    initialRouteName: "Profile"
  }
);

const TabStack = createBottomTabNavigator(
  {
  HomeStack,
  ProfileStack
}, {
  initialRouteName: "HomeStack",

}
);

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
    TabStack
  },
  {
    headerMode: "none",
    initialRouteName: "AuthStack"
  }
);

export default AppStack;
