import * as React from "react";
import {
  Button,
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  View
} from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<{}, {}>;
}

export default class Main extends React.Component<Props> {
  public render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Put your login stuff here</Text>
        <Button title="Login!" onPress={ev => this.navigate(ev, "Main")} />
        <Button title="Signup!" onPress={ev => this.navigate(ev, "Signup")} />
        <Button title="ForgotPassword!" onPress={ev => this.navigate(ev, "ForgotPassword")} />
      </View>
    );
  }
  private navigate(ev: NativeSyntheticEvent<NativeTouchEvent>, page: string) {
    this.props.navigation.navigate(page);
  }
}
