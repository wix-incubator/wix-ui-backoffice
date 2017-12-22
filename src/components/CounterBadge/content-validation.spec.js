import {textOfMaxTwoSymbols, isStringOrNumber, isUnderThreeSymbols} from './content-validation';

describe('CounterBadge content validation', () => {

  describe('#textOfMaxTwoSymbols', () => {
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
      expect(resultOfCorrectInput).toBeFalsy();
    });

    it('should not return an error when content value is not provided', () => {
      const result = getResult(undefined);
      expect(result).toBeFalsy();
    });
  });

  describe('#isStringOrNumber', () => {
    it('should return true if the content is string or number', () => {
      expect(isStringOrNumber('text')).toBeTruthy();
      expect(isStringOrNumber(123)).toBeTruthy();
    });

    it('should return false for other types of objects', () => {
      expect(isStringOrNumber(undefined)).toBeFalsy();
      expect(isStringOrNumber(null)).toBeFalsy();
      expect(isStringOrNumber(true)).toBeFalsy();
      expect(isStringOrNumber({})).toBeFalsy();
      expect(isStringOrNumber([])).toBeFalsy();
    });
  });

  describe('#isUnderThreeSymbols', () => {
    it('should return true for values with length of under three symbols', () => {
      expect(isUnderThreeSymbols('')).toBeTruthy();
      expect(isUnderThreeSymbols('1')).toBeTruthy();
      expect(isUnderThreeSymbols('2')).toBeTruthy();
      expect(isUnderThreeSymbols(1)).toBeTruthy();
      expect(isUnderThreeSymbols(43)).toBeTruthy();
    });

    it('should return false for other values', () => {
      expect(isUnderThreeSymbols(12.43)).toBeFalsy();
      expect(isUnderThreeSymbols('1233')).toBeFalsy();
      expect(isUnderThreeSymbols(undefined)).toBeFalsy();
      expect(isUnderThreeSymbols(null)).toBeFalsy();
      expect(isUnderThreeSymbols(true)).toBeFalsy();
      expect(isUnderThreeSymbols({})).toBeFalsy();
      expect(isUnderThreeSymbols([])).toBeFalsy();
    });
  });
});
