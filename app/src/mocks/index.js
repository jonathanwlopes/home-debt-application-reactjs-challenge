import { generateId } from "../utils/generateId";

const dbDebtApplication = {
  users: [
    {
      _id: generateId(),
      name: "Jonathan",
      lastName: "Lopes",
      age: 27,
      adress: {
        street: "Mario Pavanello",
        number: 200,
        district: "Nova Mauá",
      },
      wallet: {
        currency: "R$",
        bank: "Nubank",
        type: "Conta Corrente",
        amount: 10000,
      },
    },

    {
      _id: 2,
      name: "Raul",
      lastName: "Silva",
      age: 22,
      currency: "R$",
      adress: {
        street: "Adutora do rio claro",
        number: 200,
        district: "Nova Mauá",
      },
      wallet: [
        {
          _id: 1,
          bank: "Banco Inter",
          type: "Conta Corrente",
          amount: 1000,
        },

        {
          _id: 2,
          bank: "Nubank",
          type: "Poupança",
          amount: 20000,
        },
      ],
    },
  ],
  getUsers: () => {
    return [...dbDebtApplication.users];
  },

  getUserById: (userId) => {
    const userList = dbDebtApplication.getUsers();

    const user = userList.find((user) => user._id === userId);

    return user;
  },
};

export default dbDebtApplication;
