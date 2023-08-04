import Table from "../../components/TableEmployee";

/**
 * Function for displaying the page of current view employees
 * @returns {js} - The page of current view employees
 */

const EmployeeList = () => {
  return (
    <div className="employee-page main">
      <Table />
    </div>
  );
};

export default EmployeeList;
