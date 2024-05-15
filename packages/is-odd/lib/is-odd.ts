import { isEven } from 'is-even';

export function isOdd(n: number): boolean {
  return !isEven(n);
}
