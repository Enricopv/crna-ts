import * as React from "react";
import { Text } from "react-native";

export default class Logo extends React.PureComponent {
  public render() {
    return (
      <Text style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 20 }}>
        SNAFOOD
      </Text>
    );
  }
}
