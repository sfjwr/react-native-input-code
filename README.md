# react-native-input-code

A code input field for React Native.

![screenshot0](https://user-images.githubusercontent.com/8042009/58779993-7e6b3800-8612-11e9-99d0-6835eea178aa.png)

![screenshot1](https://user-images.githubusercontent.com/8042009/58779997-81febf00-8612-11e9-956c-f6e7620d899c.png)

# Installation

```sh
yarn add react-native-input-code
```

# Usage

```typescript
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import InputCode, {InputCodeHandler} from 'react-native-input-code';

const App = () => {
  const inputCode = useRef<InputCodeHandler>(null);
  const [code, setCode] = useState<string>('');

  const onChangeCode = useCallback(value => {
    console.log(value);
    setCode(value);
  }, []);

  const onFullFill = useCallback(
    value => {
      console.log(value);

      setTimeout(() => {
        setCode('');
        inputCode.current!.focus();
      }, 100);
    },
    [inputCode],
  );

  return (
    <SafeAreaView>
      <InputCode
        code={code}
        length={4}
        ref={inputCode}
        onChangeCode={onChangeCode}
        onFullFill={onFullFill}
        passcode
        passcodeChar="*"
        autoFocus
        codeContainerStyle={styles.codeContainerStyle}
        codeContainerCaretStyle={styles.codeContainerCaretStyle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  codeContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  codeContainerCaretStyle: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'red',
  },
});

export default App;
```
