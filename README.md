# react-native-input-code

A code input field for React Native.

![screenshot0](https://user-images.githubusercontent.com/8042009/58779993-7e6b3800-8612-11e9-99d0-6835eea178aa.png)

![screenshot1](https://user-images.githubusercontent.com/8042009/58779997-81febf00-8612-11e9-956c-f6e7620d899c.png)

# Installation

```sh
yarn add react-native-input-code
```

# Usage

```javascript
import InputCode from 'react-native-input-code';

type Props = {};
export default class App extends Component<Props> {
  onChangeCode = code => {
    console.log(code);
  };

  onFullFill = code => {
    setTimeout(() => {
      this.inputCode.reset();
      this.inputCode.focus();
    }, 100);
  };

  render() {
    return (
      <View style={styles.container}>
        <InputCode
          ref={ref => (this.inputCode = ref)}
          length={4}
          onChangeCode={this.onChangeCode}
          onFullFill={this.onFullFill}
          passcode
          passcodeChar="*"
          codeContainerStyle={{
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
          codeContainerCaretStyle={{
            borderWidth: 0,
            borderBottomWidth: 2,
            borderBottomColor: 'red',
          }}
          autoFocus
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
    backgroundColor: '#F5FCFF',
  },
});
```
