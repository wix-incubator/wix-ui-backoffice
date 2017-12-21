export const textOfMaxTwoSymbols = (props, propName, componentName = 'CounterBadge') => {
  const value = props[propName];

  if (!value) {
    return null;
  }

  if (typeof value !== 'string' && typeof value !== 'number') {
    return new Error(`${propName} in ${componentName} should be a string or a number`);
  }

  if (value.toString().length > 2) {
    return new Error(`${propName} in ${componentName} should not be longer than two characters`);
  }

  return null;
};
