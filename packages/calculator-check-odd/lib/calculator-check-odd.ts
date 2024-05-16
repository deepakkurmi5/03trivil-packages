import { isEven } from 'calculator-check-even';
import type { Counter } from 'calculator-types';

export function isOdd(n: Counter): boolean {
  return !isEven(n);
}
