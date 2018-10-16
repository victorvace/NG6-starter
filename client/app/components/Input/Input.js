import angular from 'angular';
import uiRouter from 'angular-ui-router';
import InputComponent from './Input.component';

let InputModule = angular.module('Input', [
  uiRouter
])

.component('inputQuestion', InputComponent)

.name;

export default InputModule;
