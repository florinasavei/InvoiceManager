import { calculateRemainingPercentage } from './percentage-calculator';

describe('calculateRemainingPercentage', () => {
  it('calculates the remaining percentage correctly when there is remaining debt', () => {
    const paid = 500;
    const totalDebt = 1000;
    const decimals = 2;
    const result = calculateRemainingPercentage(paid, totalDebt, decimals);
    expect(result).toBe(50);
  });

  it('calculates the remaining percentage as 0 when total debt is paid off', () => {
    const paid = 1000;
    const totalDebt = 1000;
    const decimals = 2;
    const result = calculateRemainingPercentage(paid, totalDebt, decimals);
    expect(result).toBe(0);
  });

  it('handles decimal precision correctly', () => {
    const paid = 254;
    const totalDebt = 5001;
    const decimals = 3;
    const result = calculateRemainingPercentage(paid, totalDebt, decimals);
    expect(result).toBe(94.921);
  });

  it('handles no decimals by default to 2 decimals', () => {
    const paid = 3.5;
    const totalDebt = 10.2;
    const result = calculateRemainingPercentage(paid, totalDebt);
    expect(result).toBe(65.69);
  });

  it('returns 0 when totalDebt is 0', () => {
    const paid = 100;
    const totalDebt = 0;
    const result = calculateRemainingPercentage(paid, totalDebt);
    expect(result).toBe(0);
  });
});
