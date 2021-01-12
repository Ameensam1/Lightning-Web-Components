import { LightningElement } from "lwc";

export default class ConditionalRenderingOnInput extends LightningElement {
  inputText = null;
  loginMsg = "You are logged in gracefully!!!";
  invalidPassMsg = "Wrong password!";
  outputMsg;
  password = "Eagle";

  inputHandler(e) {
    this.inputText = e.target.value;
  }

  get getLoginMsg() {
    if (this.inputText === this.password) {
      return (this.outputMsg = this.loginMsg);
    } else if (this.inputText !== this.password && this.inputText !== null) {
      return setTimeout(() => {
        this.outputMsg = this.invalidPassMsg;
      }, 2000);
    } else {
      return (this.outputMsg = null);
    }
  }
}
