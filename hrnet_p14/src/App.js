import "./style/style.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./utils/context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EmployeeProvider>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/employee-list"
              element={<EmployeeList />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </EmployeeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
