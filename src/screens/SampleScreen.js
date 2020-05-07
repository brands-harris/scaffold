import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

export class SampleScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>This is a sample screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleScreen);
