import { LightningElement, api } from 'lwc';

export default class ProgressBarChild extends LightningElement {
  @api percentage;

  get getStyle() {
    return `width:${this.percentage}%`;
  }

  get getClass() {
    return this.percentage <= 40 && this.percentage > 0 ? 'greenBar' : this.percentage > 40 && this.percentage <= 70 ? 'yellowBar' :
      this.percentage > 70 && this.percentage > 0 ? 'redBar' : 'default';
  }
}