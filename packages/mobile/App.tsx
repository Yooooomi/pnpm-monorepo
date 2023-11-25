import {MySuperComponent} from '@test/shared/src/components/mySuperComponent';
import {MySuperPlatformDependantComponent} from '@test/shared/src/components/mySuperPlatformDependantComponent';
import {View} from 'react-native';

export function App() {
  return (
    <View>
      <MySuperComponent />
      <MySuperPlatformDependantComponent />
    </View>
  );
}
