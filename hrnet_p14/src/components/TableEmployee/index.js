
import { useState, useContext } from "react";
import DataTable from "react-data-table-component";
import { EmployeeContext } from "../../utils/context";

// Need to be reconvert from display mode to be sorted
const dateSortStartDate = (rowA, rowB) => {
  const a = new Date(rowA.startDate);
  const b = new Date(rowB.startDate);

  return a > b ? 1 : -1;
};

// Need to be reconvert from display mode to be sorted
const dateSortBirthDate = (rowA, rowB) => {
  const a = new Date(rowA.dateOfBirth);
  const b = new Date(rowB.dateOfBirth);

  return a > b ? 1 : -1;
};

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
    sortFunction: dateSortStartDate,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Date Of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
    sortFunction: dateSortBirthDate,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

const Table = () => {
  const { list } = useContext(EmployeeContext);

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Search bar filter
  const filteredData = list.filter(
    (item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName.toLowerCase().includes(search.toLowerCase()) ||
      item.startDate.includes(search) ||
      item.department.toLowerCase().includes(search.toLowerCase()) ||
      item.dateOfBirth.includes(search) ||
      item.street.toLowerCase().includes(search.toLowerCase()) ||
      item.city.toLowerCase().includes(search.toLowerCase()) ||
      item.state.toLowerCase().includes(search.toLowerCase()) ||
      item.zipCode.toString().includes(search.toString())
  );

  return (
    <div>
      <label htmlFor="search" className="search-bar">
        Search employee :
        <input id="search" type="text" onChange={handleSearch} />
      </label>
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        className="table"
      />
    </div>
  );
};

export default Table;
