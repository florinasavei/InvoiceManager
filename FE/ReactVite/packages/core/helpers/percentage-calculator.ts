export const calculateRemainingPercentage = (
  paid: number,
  totalDebt: number,
  decimals: number = 2
): number => {
  if (totalDebt === 0) {
    return 0;
  }
  const remainingDebt = totalDebt - paid;
  return Number(Number((remainingDebt / totalDebt) * 100).toFixed(decimals));
};
