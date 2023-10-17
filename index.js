/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Layout from './src/Layout';
import ListItem1 from './src/ListItem1';
import ComponentCore from './src/ComponentCore';
import state1 from './src/state1';
import State2 from './src/State2';
import Props1 from './src/Props1';
import Props2 from './src/Props2';
import Input1 from './src/Input1';
import TaxApp from './src/TaxApp';
AppRegistry.registerComponent(appName, () => TaxApp);
