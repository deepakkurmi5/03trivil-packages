import { isEven } from 'calculator-check-even';

export function isOdd(n: number): boolean {
  return !isEven(n);
}
