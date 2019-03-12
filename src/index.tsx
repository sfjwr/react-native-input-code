import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

type Props = {
  length: number;
  onChangeCode?: (code: string) => void | Promise<void>;
  onFullFill?: (code: string) => void | Promise<void>;
  style?: ViewStyle;
  codeContainerStyle?: ViewStyle;
  codeContainerCaretStyle?: ViewStyle;
  codeTextStyle?: TextStyle;
  passcode?: boolean;
  autoFocus?: boolean;
};

type State = {
  code: string;
};

export default class InputCode extends Component<Props, State> {
  private textInputCode: TextInput | null = null;

  static defaultProps = {
    autoFocus: true,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      code: '',
    };
  }

  onPressCode = () => {
    if (this.textInputCode === null) return;

    this.textInputCode.focus();
  };

  onChangeText = (value: string) => {
    value = value.replace(/[^0-9]/g, '');
    const changed = value !== this.state.code;

    this.setState({ code: value });

    if (changed) {
      this.props.onChangeCode && this.props.onChangeCode(value);

      if (value.length === this.props.length) {
        this.props.onFullFill && this.props.onFullFill(value);
      }
    }
  };

  extractCode(index: number) {
    if (this.props.passcode && this.state.code.length - 1 > index) {
      return '*';
    }
    return this.state.code.length <= index ? '' : this.state.code.substr(index, 1);
  }

  reset = () => {
    if (this.textInputCode === null) return;

    this.textInputCode.clear();
    this.setState({ code: '' });
  };

  focus = () => {
    if (this.textInputCode === null) return;

    this.textInputCode.focus();
  };

  render() {
    const renderItem = (index: number) => (
      <View
        style={
          this.state.code.length === index
            ? {
                ...styles.codeContainerCaret,
                ...this.props.codeContainerCaretStyle,
              }
            : {
                ...styles.codeContainer,
                ...this.props.codeContainerStyle,
              }
        }
        key={'input-code-' + index.toString()}
      >
        <Text style={{ fontSize: 30, ...this.props.codeTextStyle }}>{this.extractCode(index)}</Text>
      </View>
    );

    return (
      <View style={this.props.style}>
        <TouchableOpacity onPress={this.onPressCode} style={{ alignItems: 'stretch' }} activeOpacity={1}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {Array(this.props.length)
              .fill(0)
              .map((item, index) => renderItem(index))}
          </View>
        </TouchableOpacity>

        <View>
          <TextInput
            ref={ref => {
              this.textInputCode = ref;
            }}
            autoFocus={this.props.autoFocus}
            keyboardType="number-pad"
            caretHidden={true}
            onChangeText={this.onChangeText}
            maxLength={this.props.length}
            style={{ fontSize: 0, opacity: 1, height: 0, margin: 0, padding: 0 }}
            value={this.state.code}
          />
        </View>
      </View>
    );
  }
}

const styles: { [key: string]: ViewStyle } = {
  codeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },

  codeContainerCaret: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
};
