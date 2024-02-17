//creating the test suite
describe('fist test', () => {
  let testVariable: any;

  //lifecycle method get called before every test case execution
  beforeEach(() => {
    testVariable = {};
  });

  //WRITING THE TEST CASES
  it('should return true if a is true', () => {
    //arrange
    testVariable.a = false;

    //act
    testVariable.a = true;

    //assert

    expect(testVariable.a).toBe(true);
  });
});
