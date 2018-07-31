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

export default class Options extends React.Component<Props> {

  static navigationOptions = {
    title: 'Options',
  };

  public render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>This is where you might some account Options</Text>
        <Button title="Press Me to go back to Profile" onPress={ev => this.navigate(ev, "Profile")} />
      </View>
    );
  }
  private navigate(ev: NativeSyntheticEvent<NativeTouchEvent>, page: string) {
    this.props.navigation.navigate(page);
  }
}
