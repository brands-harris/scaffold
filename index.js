//This is where you'll register your root, and import all screens for use in your app

//Top level imports
import React from 'react';
import {Navigation} from 'react-native-navigation';

//Store imports
import store from './src/store/store';
import {Provider} from 'react-redux';

//Screen imports
import SampleScreen from './src/screens/SampleScreen';

//Register the component with Redux. Note registerComponentWithRedux is deprecated.
Navigation.registerComponent('SampleScreen', () => props => (
  <Provider store={store}>
    <SampleScreen {...props} />
  </Provider>
));

//Set root for navigation.
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SampleScreen',
            },
          },
        ],
      },
    },
  });
});
