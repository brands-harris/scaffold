//======================================================================
//You'll spend the majority of your time creating screens and components
//======================================================================

//Import your libraries here
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

//Import your store here, if you're going to be manipulating state
import store from '../store/store';

//Import your components here
import SampleComponent from '../components/SampleComponent'; 

export class SampleScreen extends Component {
  constructor(props) {
    super(props);
  }

  _sampleFunction = () => {
    return;
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
