import { createContext, useReducer } from "react";

const dummy_test = [
  {
    id: "e1",
    description: "Super",
    amount: 3720,
    date: new Date("2022-12-12"),
    category: 2,
  },
  {
    id: "e2",
    description: "Libro",
    amount: 2150,
    date: new Date("2022-10-12"),
    category: 1,
  },
  {
    id: "e3",
    description: "ORT",
    amount: 10700,
    date: new Date("2022-09-12"),
    category: 4,
  },
  {
    id: "e4",
    description: "Uber",
    amount: 10700,
    date: new Date("2022-09-12"),
    category: 5,
  },
  {
    id: "e5",
    description: "Kiosco",
    amount: 810,
    date: new Date("2022-06-12"),
    category: 2,
  },
  {
    id: "e6",
    description: "Internet",
    amount: 810,
    date: new Date("2022-06-12"),
    category: 6,
  },
  {
    id: "e7",
    description: "Alquiler",
    amount: 810,
    date: new Date("2022-06-12"),
    category: 3,
  },
  {
    id: "e8",
    description: "Ropa",
    amount: 7400,
    date: new Date("2022-02-12"),
    category: 1,
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => { },
  deleteExpense: (id) => { },
  updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, dummy_test);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
