import { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
  
  const [entries, setEntries] = useState([
    { id: 1, description: "Pizza", amount: -99 },
    { id: 2, description: "Samosa", amount: -7 },
    { id: 3, description: "Dosa", amount: -15 },
    { id: 4, description: "Salary", amount: 200 },
    { id: 5, description: "Stocks", amount: 50 }
  ]);
  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const [count, setcount] = useState(6)
  const handleAdd = (entry) => {
    entry.id=count;
    setcount(count+1);
    setEntries([...entries,entry]);
  };
  return (
    <ExpenseContext.Provider value={{ entries, handleDelete,handleAdd }}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
