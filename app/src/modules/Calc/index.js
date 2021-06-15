export const CalcAmount = (wallets) => {

  const totalValue = wallets.reduce((acc, wallet) => {
    acc += wallet.amount;
    return acc;
  }, 0);

  return totalValue.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
};