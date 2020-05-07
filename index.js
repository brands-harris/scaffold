//===================================================================================
//This is where you'll register your root, and import all screens for use in your app
//===================================================================================

//Import your libraries here
import React from 'react';
import {Navigation} from 'react-native-navigation';

//Import your stores here
import store from './src/store/store';
import {Provider} from 'react-redux';

//Import your components here
import SampleScreen from './src/screens/SampleScreen';

//Import your components here

//Register the component with Redux. Note registerComponentWithRedux is deprecated.
Navigation.registerComponent('SampleScreen', () => props => (
  <Provider store={store}>
    <SampleScreen {...props} />
  </Provider>
));

//Set root for navigation.
//We're setting a single screen here.
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
