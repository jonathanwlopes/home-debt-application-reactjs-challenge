import dbDebtApplication from "../../mocks";

export const CalcAmount = (userId) => {
  const user = dbDebtApplication.getUserById(userId);

  const totalValue = user.wallet.reduce((acc, wallet) => {
    acc += wallet.amount;
    return acc;
  }, 0);

  return totalValue.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
};

