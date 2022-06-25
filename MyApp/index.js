/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StackNavigator from './Appli/componentes/StackNavigator';
import {name as appName} from './app.json';
import vistaVacia from './Appli/screens/vistaVacia';

AppRegistry.registerComponent(appName, () => StackNavigator);
