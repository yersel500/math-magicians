import operate from "../logic/operate";

describe('Test to operator function', () => {
  
  test( 'First test operate', () => {

    expect(operate('9','3','-')).toBe('6');
  })

  test( 'Second test operate', () => {

    expect(operate('9','3','+')).toBe('12');
  })

  test( 'Third test operate', () => {

    expect(operate('10','2','÷')).toBe('5');
  })

  test( 'Fourth test operate', () => {

    expect(operate('9','3','x')).toBe('27');
  })

})

