import { LightningElement } from "lwc";
import signInTmp from "./signInTmp.html";
import signUpTmp from "./signUpTmp.html";
import multiTempFilesRender from "./multiTempFilesRender.html";

export default class MultiTempFilesRender extends LightningElement {
  // Sign In and Sign Up page
  signIn = "Sign In";
  signUp = "Sign Up";
  selectedPage = null;
  informalName;
  salutationsList = [
    { label: "Mr.", value: "Mr." },
    { label: "Ms.", value: "Ms." },
    { label: "Mrs.", value: "Mrs." },
    { label: "Dr.", value: "Dr." },
    { label: "Prof.", value: "Prof." }
  ];
  signUpFieldList = ["salutation"];

  get salutationOptions() {
    return this.salutationsList;
  }

  get signUpFields() {
    return this.signUpFieldList;
  }

  render() {
    return this.selectedPage === "Sign in"
      ? signInTmp
      : this.selectedPage === "Sign up"
      ? signUpTmp
      : multiTempFilesRender;
  }

  handleClick(evt) {
    this.selectedPage = evt.target.label;
  }

  submitHandler(evt) {
    if (evt.target.label === this.signIn) {
      alert("Welcome!");
    } else if (evt.target.label === this.signUp) {
      alert("Successfully signed up!");
    }
  }
}
