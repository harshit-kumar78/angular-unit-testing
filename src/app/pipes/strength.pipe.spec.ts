import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  //test cases
  it('should display weak if value < 5', () => {
    //arrange
    const strengthPipe = new StrengthPipe();
    //act
    const result = strengthPipe.transform(4);
    //assert
    expect(result).toEqual('weak');
  });

  it('should display stronger if value < 10', () => {
    //arrange
    const strengthPipe = new StrengthPipe();
    //act
    const result = strengthPipe.transform(7);
    //assert
    expect(result).toEqual('stronger');
  });
  it('should display strongest if value >= 10', () => {
    //arrange
    const strengthPipe = new StrengthPipe();
    //act
    const result = strengthPipe.transform(10);
    //assert
    expect(result).toEqual('strongest');
  });
});
