export const isStringOrNumber = value => {
  return typeof value === 'string' || typeof value === 'number';
};

export const isUnderThreeSymbols = value => {
  return isStringOrNumber(value) && value.toString().length < 3;
};

export const textOfMaxTwoSymbols = (props, propName, componentName = 'CounterBadge') => {
  const value = props[propName];

  if (value && !isStringOrNumber(value)) {
    return new Error(`${propName} in ${componentName} should be a string or a number`);
  }

  if (value && !isUnderThreeSymbols(value)) {
    return new Error(`${propName} in ${componentName} should not be longer than two characters`);
  }
};
