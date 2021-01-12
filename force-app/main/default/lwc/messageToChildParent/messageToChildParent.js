import { LightningElement } from 'lwc';

export default class MsgToChildParent extends LightningElement {

  defaultMsg = "Every color coded elements within this component are classes defined in the child component css and texts assigned to a variable in the parent component ";
  blueMsg = "This text exemplifies parsing strings as data from the parent component to the child component. This is made possible by declaring a public property with @api in the child component controller";
  greenMsg = "CSS class can also be dynamically applied to the child component from the parent component as shown in this example with different background color for each Msg. Also by leveraging a public property declared at the child controller.";
  orangeMsg = "It is important to note that properties declared in the child's component controller using camelCase must be converted to lowercase and use a dash to separate each words before being assigned as an attribute of the child component being called in the parent component";

}