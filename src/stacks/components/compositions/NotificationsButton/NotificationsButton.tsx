import * as React from "react";
import { Button, NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<{}, {}>;
}

export default class NotificationsButton extends React.Component<Props> {
  public render() {
    return (
      <Button
        onPress={ev => this.navigate(ev, "Notifications")}
        title="Login"
        color="red"
      />
    );
  }
  private navigate(ev: NativeSyntheticEvent<NativeTouchEvent>, page: string) {
    this.props.navigation.navigate(page);
  }
}
