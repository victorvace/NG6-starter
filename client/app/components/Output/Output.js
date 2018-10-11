import angular from 'angular';
import uiRouter from 'angular-ui-router';
import OutputComponent from './Output.component';

let OutputModule = angular.module('Output', [
  uiRouter
])

.component('Output', OutputComponent)

.name;

export default OutputModule;
