# Learning Log

### 21/6/23

### Tuples

A bit like arrays, can use array methos HOWEVER

Once data is in position, it is FIXED into that position.

let arr - ['ryan', 345, true];

With TS this array can be changed, these types (string, number and boolean)and positions are not locked.


//Tuples

let tuple: [string, number, boolean] = ['ryan', 345, true]  this is OK.

let tuple2: [string, number, boolean] = [2344, false, 'Terry']  this is NOT OK.

