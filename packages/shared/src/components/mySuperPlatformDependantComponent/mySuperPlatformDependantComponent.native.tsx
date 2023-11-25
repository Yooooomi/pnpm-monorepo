import { Text } from "react-native";
import { MyOtherPlatformDependant } from "../myOtherPlatformDependant";

export function MySuperPlatformDependantComponent() {
  return (
    <>
      <Text>Je suis le mobile component</Text>
      <MyOtherPlatformDependant />
    </>
  );
}
