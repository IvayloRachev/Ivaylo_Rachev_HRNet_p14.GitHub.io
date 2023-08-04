import { createContext, useState } from "react";
import { data } from "../../data/data";
export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [list, setList] = useState(data);

  const addEmployee = (employee) => {
    setList([...list, employee]);
  };

  return (
    <EmployeeContext.Provider value={{ list, setList, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
