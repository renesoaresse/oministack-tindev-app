import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './screens/Login';

export default createAppContainer(
  createSwitchNavigator({
    Login,
  }),
);
