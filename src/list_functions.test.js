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


describe('erase functions method', ()=>{
  
  it('this should be able to remove a specific task from the array', ()=>{
    const arr =[
      {description: 'first text', completed: false,index: 0,},
      {description: 'second text', completed: false,index: 1,},
      {description: 'third text', completed: false,index: 2,},
  ];
    erase(arr, 1)
    erase(arr, 2)
    erase(arr, 0)


    expect(arr.length).toBe(0)

  })
})
