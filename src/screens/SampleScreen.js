//======================================================================
//You'll spend the majority of your time creating screens and components
//======================================================================

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

//Map your state to your props, keeping your state immutable
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SampleScreen);
