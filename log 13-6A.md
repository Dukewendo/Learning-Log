# Learning Log

### 14/6/23

### Classes

similar to classes is JS

Blueprint for an object.

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
      this.client = c;
      this.details = d;
      this.amount = a;
  }

  format() {
    return `${this.client} owes £ ${this.amount} for ${this.details}`
  }
}

const invOne = new Invoice('Ted', 'work on website', 456);
const invTwo = new Invoice('Terry', 'work on front driveway', 1356);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

