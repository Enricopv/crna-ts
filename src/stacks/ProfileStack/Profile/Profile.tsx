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

export default class Profile extends React.Component<Props> {

  static navigationOptions = {
    title: 'Profile',
  };

  public render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>This is where you might a Profile and a way to view some Account Options</Text>
        <Button title="Press Me to see Options" onPress={ev => this.navigate(ev, "Options")} />
      </View>
    );
  }
  private navigate(ev: NativeSyntheticEvent<NativeTouchEvent>, page: string) {
    this.props.navigation.navigate(page);
  }
}
