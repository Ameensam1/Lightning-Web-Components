import { LightningElement } from "lwc";

export default class TwoWayDatabinding extends LightningElement {
  inputText;
  defaultMsg = "Who's mocking the mocking bird? Eagle!";
  handleChange(ev) {
    this.inputText = ev.target.value;
    this.defaultMsg = this.inputText;
  }
}
