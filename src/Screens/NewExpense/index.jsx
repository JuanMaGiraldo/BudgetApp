import React, { useState, useEffect } from "react";
import { getCategories, insertExpense } from "../../database/budget";
import { Container } from "../../pages/NewCategory.styles";

let listCategories = [];

const NewExpense = () => {
  const [type, setType] = useState("home");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const createExpense = () => {
    insertExpense(1, {
      category,
      value,
      type,
      description,
    }).then(() => console.log("inserted"));
  };

  const filterCategoriesByType = (selectedType) =>
    setCategories(listCategories.filter(({ type }) => type === selectedType));

  useEffect(() => {
    getCategories(1).then((data) => {
      listCategories = data;
      filterCategoriesByType(type);
    });
  }, []);

  useEffect(() => {
    filterCategoriesByType(type);
  }, [type]);

  return (
    <Container>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="home">Home</option>
        <option value="saving">Saving</option>
        <option value="personal">Personal</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(({ category }, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>

      <input
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        value={value}
        placeholder="Value"
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={createExpense}>Create</button>

      {/* <button onClick={createCategory}>Create</button> */}
    </Container>
  );
};

export default NewExpense;
