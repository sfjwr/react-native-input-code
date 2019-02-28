# react-native-input-code

A passcode input field for React Native.

# Installation

```sh
yarn add react-native-input-code
```

# Usage

```javascript
import InputCode from 'react-native-input-code';

type Props = {};
export default class App extends Component<Props> {
  onFullFill = (code: string) => {
    console.log(code);
    this.inputCode.reset();
  };

  render() {
    return (
      <View style={styles.container}>
        <InputCode
          ref={ref => (this.inputCode = ref)}
          length={4}
          onFullFill={this.onFullFill}
          passcode
          codeContainerStyle={{
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
          codeContainerCaretStyle={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: 'red',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
```
