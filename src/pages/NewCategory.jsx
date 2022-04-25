import React, { useState } from "react";
import { insertCategory } from "../database/budget";
import { Container } from "./NewCategory.styles";

const NewCategory = () => {
  const [type, setType] = useState("home");
  const [category, setCategory] = useState("");

  const createCategory = () => {
    insertCategory(1, { type, category });
  };

  return (
    <Container>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="home">Home</option>
        <option value="saving">Saving</option>
        <option value="personal">Personal</option>
      </select>

      <input
        value={category}
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={createCategory}>Create</button>
    </Container>
  );
};

export default NewCategory;
