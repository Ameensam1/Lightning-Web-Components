import { LightningElement, api } from 'lwc';

export default class BizCardC extends LightningElement {
  @api contactsInfo;
  // showContact = false;

  // displayHandler(event) {
  //   this.showContact = !this.showContact;
  //   event.target.innerText === 'Show Contacts' ? event.target.innerText = 'Hide Contacts' : event.target.innerText = 'Show Contacts';
  // }
}