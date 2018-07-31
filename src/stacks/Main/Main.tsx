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

  static navigationOptions = {
    title: 'Main',
  };

  public render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>This is the main page</Text>
        <Button title="Press Me" onPress={ev => this.navigate(ev, "Detail")} />
      </View>
    );
  }
  private navigate(ev: NativeSyntheticEvent<NativeTouchEvent>, page: string) {
    this.props.navigation.navigate(page);
  }
}
