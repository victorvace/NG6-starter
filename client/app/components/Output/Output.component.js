import template from './Output.html';
import controller from './Output.controller';
import './Output.scss';

let OutputComponent = {
  bindings: {
    answers: '<',
  },
  template,
};

export default OutputComponent;
