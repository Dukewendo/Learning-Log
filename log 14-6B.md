# Learning Log

### 14/6/23

### Public, Private and Read-Only

Behavior of classes is PUBLIC by default.

class Invoice {
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

If we set private- we can then only access inside the class BUT
cant access outside of the class and TypeScript wont allow the compile.

the format() method can still access a private property.

The readonly status can be read but not changed, inside OR outside of the class.