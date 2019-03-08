/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    backgroundColor: '#F5FCFF',
  },
});
