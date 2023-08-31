import _set from 'lodash.set';

export const extend = (input: string): object => {
  const parsedInput = JSON.parse(input);
  const result: any = {};

  for (const key in parsedInput) {
    if (Array.isArray(parsedInput[key])) {
      if (key.includes('.')) {
        key.split('.').reduce(
          (acc, cur, i, arr) => {
            if (i === arr.length - 1) {
              acc[cur] = parsedInput[key];
            } else {
              acc[cur] = acc[cur] || {};
            }
            return acc[cur];
          },
          result,
        );
      }
    } else if (typeof parsedInput[key] !== 'object') {
      _set(result, key, parsedInput[key]);
    } else {
      _set(result, key, extend(JSON.stringify(parsedInput[key])));
    }
  }

  return result;
};
