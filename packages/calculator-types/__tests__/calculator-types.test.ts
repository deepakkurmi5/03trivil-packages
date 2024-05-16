import { strict as assert } from 'assert';
import * as calculatorTypes from '../lib/index';

assert.deepEqual(Object.keys(calculatorTypes), ['Order']);
console.info('calculator/types tests passed');
