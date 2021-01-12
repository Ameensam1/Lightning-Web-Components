import { LightningElement } from 'lwc';

export default class ProgressBarParent extends LightningElement {
  percentage = 10;
  max = 100;
  handleChange(evt) {
    if (this.percentage !== 0) {
      this.percentage = evt.target.value <= this.max ? evt.target.value : this.max;
    }
  }
}