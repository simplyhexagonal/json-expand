import _set from 'lodash.set';

const JsonExpand = (input: string): object => {
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
      } else {
        result[key] = parsedInput[key];
      }
    } else if (typeof parsedInput[key] !== 'object') {
      _set(result, key, parsedInput[key]);
    } else {
      _set(result, key, JsonExpand(JSON.stringify(parsedInput[key])));
    }
  }

  return result;
};

export default JsonExpand;
