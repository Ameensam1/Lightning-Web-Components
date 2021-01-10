import { LightningElement } from "lwc";

export default class TemplateLoopForEach extends LightningElement {
  studentList = [
    "Sams Ameen",
    "Michael Smith",
    "James Corden",
    "Maria Tool",
    "Tony Holt",
    "Rose Holden",
    "Caroline Ortega"
  ];

  developers = [
    {
      id: "01",
      name: "Sams Ameen",
      age: 25,
      language: "Javascript"
    },
    {
      id: "02",
      name: "Michael Smith",
      age: 19,
      language: "CSS"
    },
    {
      id: "03",
      name: "James Corden",
      age: 39,
      language: "Javascript"
    },
    {
      id: "04",
      name: "Maria Tool",
      age: 33,
      language: "Apex"
    },
    {
      id: "05",
      name: "Rose Holden",
      age: 26,
      language: "Aura"
    },
    {
      id: "06",
      name: "Tony Holt",
      age: 22,
      language: "Java"
    }
  ];
}
