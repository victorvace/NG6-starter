import template from './app.html';
import './app.scss';

let appComponent = {
  template,
  controller: ['api', function(api){
    this.onNewQuestion = question => {
      this.records.unshift({
        question,
        answer: api.getAnswer()
      });
    }
    this.records = []
  }]
};

export default appComponent;
