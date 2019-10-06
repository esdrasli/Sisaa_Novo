import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '~/pages/Main';
import Menu from './pages/Menu';

const appNavigator = createStackNavigator({
    Main:{
      screen:Main
    },
    menu:{
      screen: Menu
    }
  });


const Routes = createAppContainer(appNavigator);


export default Routes;
