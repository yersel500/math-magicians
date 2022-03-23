import calculate from './calculate';

describe('Test calculate file', () => {
  test('First calculate test', () => {
    const myInput = {
      total: '2',
      next: '3',
      operation: '+',
    };

    const myOutput = {
      total: '5',
      next: null,
      operation: null,
    };
    expect(calculate(myInput, '=')).toEqual(myOutput);
  });

  test('Second calculate test', () => {
    const myInput = {
      total: '10',
      next: '3',
      operation: '-',
    };

    const myOutput = {
      total: '7',
      next: null,
      operation: null,
    };
    expect(calculate(myInput, '=')).toEqual(myOutput);
  });

  test('Second calculate test', () => {
    const myInput = {
      total: '15',
      next: '5',
      operation: 'x',
    };

    const myOutput = {
      total: '75',
      next: null,
      operation: null,
    };
    expect(calculate(myInput, '=')).toEqual(myOutput);
  });
});
