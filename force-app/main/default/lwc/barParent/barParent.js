import { LightningElement } from 'lwc';

export default class BarParent extends LightningElement {

  // className;
  handleColor() {
    this.template.querySelector('c-bar-child-method-call').changeBarColor();
  }
}