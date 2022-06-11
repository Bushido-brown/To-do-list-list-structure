const {
  add, edit, erase, clear,
} = require('./list_functions.js');

const text = 'some test';

describe('add functions method', () => {
  beforeEach(() => {

  });
  it('should be able to add a new task to the list ', () => {
    const arr = [];
    add(text, arr);
    expect(arr.length).toBe(1);
  });
});
describe('erase functions method', () => {
  it('this should be able to remove a specific task from the array', () => {
    const arr = [{ description: 'first text', completed: false, index: 0 },
      {
        description: 'second text',
        completed: false,
        index: 1,
      },
      { description: 'third text', completed: false, index: 2 }];
    erase(arr, 1);
    erase(arr, 2);
    erase(arr, 0);
    expect(arr.length).toBe(0);
  });
});
describe('clear functions method', () => {
  it('this should be able to clear all items in the array that completed is true', () => {
    const arr = [{ description: 'first text', completed: true, index: 0 },
      { description: 'second text', completed: true, index: 1 },
      {
        description: 'third text',
        completed: false,
        index: 2,
      }];
    const returedarr = clear(arr);
    // deletes the ones that completed is true
    expect(returedarr.length).toBe(1);
  });
});
