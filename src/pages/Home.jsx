import React, { useEffect, useState } from "react";
import PieChart from "../components/PieChart";
import { Container, GraphsContainer } from "./Home.styles";
import { getExpenses, getUserData } from "../database/budget";
import { filterExpensesThisMonth } from "../helpers/expenses";

const Home = () => {
  const userID = 1;
  const [salary, setSalary] = useState(0);
  const [basicExpensesPercentage, setBasicExpensesPercentage] = useState(0);
  const [investmentPercentage, setInvestmentPercentage] = useState(0);
  const [personalPercentage, setPersonalPercentage] = useState(0);
  const [basicData, setBasicData] = useState([]);
  const [savingData, setSavingData] = useState([]);
  const [personalData, setPersonalData] = useState([]);

  const basicExpensesLimit = salary * basicExpensesPercentage;
  const investmentLimit = salary * investmentPercentage;
  const personalLimit = salary * personalPercentage;

  //
  // {JSON.stringify(data)}

  useEffect(async () => {
    // insertExpense(1, {
    //   category: 3,
    //   value: 3100,
    //   type: "saving",
    // });

    getExpenses(userID).then((data) => {
      const { basic, saving, personal } = filterExpensesThisMonth(data);
      setBasicData(basic);
      setSavingData(saving);
      setPersonalData(personal);
    });

    getUserData(userID).then(
      ({
        salary,
        basicExpensesPercentage,
        investmentPercentage,
        personalPercentage,
      }) => {
        setSalary(+salary);
        setBasicExpensesPercentage(+basicExpensesPercentage);
        setInvestmentPercentage(+investmentPercentage);
        setPersonalPercentage(+personalPercentage);
      }
    );
  }, []);

  return (
    <Container>
      <GraphsContainer>
        <PieChart
          title={"Basic expenses"}
          data={basicData}
          limit={basicExpensesLimit}
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
    </Container>
  );
};

export default Home;
