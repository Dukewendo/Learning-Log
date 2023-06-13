# Learning Log

### 13/6/23

### DOM interaction and Typecasting

same usage as when we use JS but few key differences

const anchor = document.querySelector('a')!;

The ! at the end indicating we KNOW it wont return null.

const anchor = document.querySelector('a')!;

// if(anchor) {
//   console.log(anchor.href)
// }

//console.log(anchor.href)

//const form = document.querySelector('form')!;   //type form

//const form = document.querySelector('new-item-form')!;  //type element (class) NOT form

// Use typecasting

const form = document.querySelector('new-item-form') as HTMLFormElement; //typecast

//console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;    //by ID and typecast

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
})