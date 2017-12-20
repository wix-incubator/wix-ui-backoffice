import {textOfMaxTwoSymbols} from './content-validation';

describe('CounterBadge content validation', () => {
  const getResult = value => textOfMaxTwoSymbols({children: value}, 'children');

  it('should return an error when content is not of type string or number', () => {
    const resultOfObj = getResult({});
    const resultOfArray = getResult(['some', 'thing', 'inside']);
    const resultOfBool = getResult(true);
    expect(resultOfObj instanceof Error).toBeTruthy();
    expect(resultOfArray instanceof Error).toBeTruthy();
    expect(resultOfBool instanceof Error).toBeTruthy();
  });

  it('should return an error when content string length is longer than two', () => {
    const resultOfString = getResult('two');
    const resultOfNumber = getResult(123);
    const resultOfCorrectInput = getResult('12');
    expect(resultOfString instanceof Error).toBeTruthy();
    expect(resultOfNumber instanceof Error).toBeTruthy();
    expect(resultOfCorrectInput).toBeNull();
  });

  it('should not return an error when content value is not provided', () => {
    const result = getResult(undefined);
    expect(result).toBeNull();
  });
});
