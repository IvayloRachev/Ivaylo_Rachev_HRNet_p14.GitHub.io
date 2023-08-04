import { createContext, useState } from "react";
import { data } from "../../data/data";
export const EmployeeContext = createContext();

/**
 * Function for create to context for the employees
 * @param {string} children 
 * @returns {Object} context
 */

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
