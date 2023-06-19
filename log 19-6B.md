# Learning Log

### 19/6/23

### Interfaces with classes


A class can have an interface implimented on it to follow a certain set of rules.
e.g 

export interface HasFormatter {
    format(): string;
}


then..

export class Invoice implements HasFormatter{
    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {
    }
  
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }

This returns a string which is valid.

we import them where needed:

import{ Invoice } from './classes/invoice.js';
import{ Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

and use them;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  
  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
