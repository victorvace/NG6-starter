class InputController {
  constructor() {
    this.question = '';
  }
  onSubmit() {
    console.log('nueva pregunta');
    this.submit({question:this.question});
    this.question = '';
  }
}

export default InputController;
