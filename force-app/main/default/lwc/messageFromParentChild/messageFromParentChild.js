import { LightningElement, api } from 'lwc';

export default class MessageFromParentChild extends LightningElement {
  @api message;
  @api className;
  showText = false; variant = 'brand'; btnLabel = "Show Text";
  displayTextHandler() {
    this.showText = !this.showText; // Toggle
    this.showText === true ? this.btnLabel = 'Hide Text' : this.btnLabel = "Show Text"; // Dynamic button label
    this.btnLabel === "Show Text" ? this.variant = 'brand' : this.variant = 'destructive'; // Dynamic button variant
  }
  get getMsgClass() {
    return `msg ${this.className ? this.className : ''}`;
  }

}