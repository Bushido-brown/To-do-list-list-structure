const {add, edit, erase, clear} = require ('./list_functions');

const text = 'some test';

describe('add functions method', ()=>{
  beforeEach(()=>{

  })
  it('should be able to add a new task to the list ', ()=>{
    let arr = [];
    add(text, arr);
    expect(arr.length).toBe(1);

  })
})
