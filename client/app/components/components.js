import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Input from './Input/Input.js';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Input
])

.name;

export default componentModule;
