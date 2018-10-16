import template from './Input.html';
import controller from './Input.controller';
import './Input.scss';

let InputComponent = {
  bindings: {
    submit: '&'
  },
  template,
  controller
};

export default InputComponent;
