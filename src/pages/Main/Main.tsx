import * as React from "react";
import { Text, View } from "react-native";

export default class Main extends React.Component {
  public render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>This is the main page</Text>
      </View>
    );
  }
}
