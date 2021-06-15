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
          _id: 100,
          bank: "Banco Inter",
          type: "Conta Corrente",
          amount: 1000,
        },

        {
          _id: 200,
          bank: "Nubank",
          type: "Poupança",
          amount: 20000,
        },
        {
          _id: 201,
          bank: "Nubank",
          type: "Poupança",
          amount: 20000,
        },
        {
          _id: 202,
          bank: "Nubank",
          type: "Poupança",
          amount: 20000,
        },
        {
          _id: 203,
          bank: "Nubank",
          type: "Poupança",
          amount: 20000,
        },
      ],
      goals: [
        {
          _id: 1000,
          name: "Curso tecnologia",
          date: new Date(),
          value: 20000,
          amount: 1000,
        },
        {
          _id: 1001,
          name: "Material de construção",
          date: new Date(),
          value: 20000,
          amount: 19000,
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

  addGoals: () => {
    const newGoal = {
      _id: generateId(),
      name: "Material de construção",
      date: new Date(),
      value: 20000,
      amount: 19000,
    };
    
    const newGoals = [...dbDebtApplication.users[1].goals, newGoal];

    dbDebtApplication.users[1].goals = newGoals;

  },
};

export default dbDebtApplication;
