import React from "react";
import Home from "./pages/Home";
import NewCategory from "./pages/NewCategory";
import NewExpense from "./Screens/NewExpense";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-category" element={<NewCategory />} />
        <Route path="/new-expense" element={<NewExpense />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
