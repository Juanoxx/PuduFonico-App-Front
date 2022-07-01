/**
 * @format
 */

import {AppRegistry} from 'react-native';
import StackNavigator from './Appli/componentes/StackNavigator';
import {name as appName} from './app.json';
import vistaVacia from './Appli/screens/vistaVacia';
import voiceTest from './Appli/screens/voiceTest';

AppRegistry.registerComponent(appName, () => StackNavigator);
