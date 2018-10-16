import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Input from './Input/Input.js';
import Output from './Output/Output.js';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Input,
  Output
])

.name;

export default componentModule;
