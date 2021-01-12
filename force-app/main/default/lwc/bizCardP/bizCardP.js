import { LightningElement } from 'lwc';

export default class BizCardP extends LightningElement {

  contactsInfo = [
    {
      name: "Jack Bauer",
      id: 1,
      title: "CEO & Founder",
      company: "Harvard University, example",
      get btnText() {
        return this.name;
      },
      imageUrl: "https://www.w3schools.com/w3images/team1.jpg"
    },
    {
      name: "James Bond",
      id: 2,
      title: "CEO & Founder",
      company: "Standford University, example",
      get btnText() {
        return this.name;
      },
      imageUrl: "https://www.w3schools.com/w3images/team2.jpg"
    },
    {
      name: "Brother Warner",
      id: 3,
      title: "CEO & Founder",
      company: "Sydney University, example",
      get btnText() {
        return this.name;
      },
      imageUrl: "https://www.w3schools.com/w3images/team3.jpg"
    },
    {
      name: "Peter Parker",
      id: 4,
      title: "CEO & Founder",
      company: "Melbourne University, example",
      get btnText() {
        return this.name;
      },
      imageUrl: "https://www.w3schools.com/w3images/team4.jpg"
    }
  ];

  showContacts = false;
  displayHandler(event) {
    this.showContacts = !this.showContacts;
    event.target.innerText === 'Show Contacts' ? event.target.innerText = 'Hide Contacts' : event.target.innerText = 'Show Contacts';
  }

}