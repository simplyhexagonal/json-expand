import assert from 'assert';
import fs from 'fs';
import expand from '../dist/json-expand';

const inputData = fs.readFileSync('./src/fixtures/input.data.json', 'utf8');
const expectedData = fs.readFileSync('./src/fixtures/expected.data.json', 'utf8');

const result = expand(inputData);

console.log(JSON.stringify(result, null, 2));

assert.deepStrictEqual(result, JSON.parse(expectedData));

console.log('All tests passed!');
