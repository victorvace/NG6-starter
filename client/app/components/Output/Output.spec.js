import OutputModule from './Output';
import OutputController from './Output.controller';
import OutputComponent from './Output.component';
import OutputTemplate from './Output.html';

describe('Output', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OutputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OutputController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(OutputTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OutputComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OutputTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OutputController);
    });
  });
});
