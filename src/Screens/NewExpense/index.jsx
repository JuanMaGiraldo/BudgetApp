import React, { useState, useEffect } from "react";
import { getCategories, insertExpense } from "../../database/budget";
import { Container } from "../../pages/NewCategory.styles";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

let listCategories = [];

const NewExpense = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("home");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const createExpense = () => {
    console.log({ category, value, type, description });
    setIsCreating(true);

    insertExpense(1, {
      category,
      value,
      type,
      description,
    }).then(() => {
      navigate("/");
    });
  };

  const filterCategoriesByType = (selectedType) => {
    const newCategories = listCategories.filter(
      ({ type }) => type === selectedType
    );
    setCategories(newCategories);
    const firstCategory = newCategories[0];
    setCategory(firstCategory?.category);
  };

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
      {isCreating ? (
        <Spinner />
      ) : (
        <>
          {}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="home">Home</option>
            <option value="saving">Saving</option>
            <option value="personal">Personal</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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
        </>
      )}
    </Container>
  );
};

export default NewExpense;
