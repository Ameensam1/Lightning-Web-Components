import { LightningElement } from "lwc";

export default class GetterDemo extends LightningElement {
  sendData = false;
  selectedBtn = "OFF";
  btnStatus;
  btnLabel = "Fetch Data";
  message =
    "Assuming I'm the data you intend to fetch and I resides somewhere in the database. With getter, you are able to retrieve it.";
  get getMessage() {
    return this.message === "" ||
      this.message === null ||
      this.message === undefined
      ? "No data"
      : this.message;
  }

  get getBtnLabel() {
    return this.sendData === false
      ? (this.btnLabel = "Fetch Data")
      : (this.btnLabel = "Hide Data");
  }

  handleRequest() {
    this.sendData = !this.sendData;
    this.getBtnLabel();
    this.getMessage();
  }

  handleClick(ev) {
    this.btnStatus = ev.currentTarget.innerText;
    this.selectedBtn = ev.currentTarget.innerText;
    ev.removeEventListener();
  }

  get getSelectedBtn() {
    return `box ${this.selectedBtn === "ON" ? "green" : "red"}`;
  }
}
