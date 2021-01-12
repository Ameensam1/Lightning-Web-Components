import { LightningElement, api } from 'lwc';

export default class BarChildMethodCall extends LightningElement {

  className = 'blueBar';
  @api changeBarColor() {
    this.className = 'redBar';
  }
}