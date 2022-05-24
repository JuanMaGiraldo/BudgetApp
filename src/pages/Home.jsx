import React, { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import { Container, GraphsContainer } from "./Home.styles";
import { getExpenses, getUserData } from "../database/budget";
import { filterExpensesThisMonth } from "../helpers/expenses";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const userID = 1;
  const [salary, setSalary] = useState(0);
  const [homeExpensesPercentage, sethomeExpensesPercentage] = useState(0);
  const [investmentPercentage, setInvestmentPercentage] = useState(0);
  const [personalPercentage, setPersonalPercentage] = useState(0);
  const [homeData, setHomeData] = useState([]);
  const [savingData, setSavingData] = useState([]);
  const [personalData, setPersonalData] = useState([]);

  const [fullExpenses, setFullExpenses] = useState([]);

  const homeExpensesLimit = salary * homeExpensesPercentage;
  const investmentLimit = salary * investmentPercentage;
  const personalLimit = salary * personalPercentage;

  useEffect(async () => {
    getExpenses(userID).then((data) => {
      const { home, saving, personal } = filterExpensesThisMonth(data);

      setHomeData(home);
      setSavingData(saving);
      setPersonalData(personal);
      setFullExpenses(data);
    });

    getUserData(userID).then(
      ({
        salary,
        homeExpensesPercentage,
        investmentPercentage,
        personalPercentage,
      }) => {
        setSalary(+salary);
        sethomeExpensesPercentage(+homeExpensesPercentage);
        setInvestmentPercentage(+investmentPercentage);
        setPersonalPercentage(+personalPercentage);
      }
    );
  }, []);

  return (
    <Container>
      <GraphsContainer>
        <PieChart
          title={"Home expenses"}
          data={homeData}
          limit={homeExpensesLimit}
        />
        <PieChart
          title={"Savings/Investment"}
          data={savingData}
          limit={investmentLimit}
        />
        <PieChart
          title={"Personal"}
          data={personalData}
          limit={personalLimit}
        />
      </GraphsContainer>
      <button
        onClick={() => {
          navigate("/new-category");
        }}
      >
        + Category
      </button>
      <button
        onClick={() => {
          navigate("/new-expense");
        }}
      >
        + Expense
      </button>

      {fullExpenses.map(({ description, category, month, day, value }) => {
        return (
          <p>
            {day}-{month} {description} {value} - {category}
          </p>
        );
      })}
    </Container>
  );
};

export default Home;
