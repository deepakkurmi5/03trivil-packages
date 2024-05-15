import { isEven } from 'demo-is-even';

export function isOdd(n: number): boolean {
  return !isEven(n);
}
