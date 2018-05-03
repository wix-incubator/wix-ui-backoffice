import {hexToRgba, enumValues} from './';

describe('hexToRgba function', () => {
  it('should transform hex to Rgba', () => {
    const opacity = 0;
    expect(hexToRgba('#4af441', opacity)).toBe(`rgba(74, 244, 65, ${opacity})`);
  });
});

describe('enumValues function', () => {
  
  it('should list enum values', () => {
    enum Foo {
      AAA= 'aaa',
      BBB= 'bbb'
    }
    expect(enumValues(Foo)).toEqual(['aaa','bbb']);
  });
});
