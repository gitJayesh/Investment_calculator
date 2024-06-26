import React from "react";
import {
  calculateInvestmentResults,
  convertUsdToInr,
  formatter,
} from "../util/investment";

const Results = ({ input }) => {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{convertUsdToInr(yearData.valueEndOfYear)}</td>
              {/* <td>{formatter.format(yearData.valueEndOfYear)}</td> */}
              <td>{convertUsdToInr(yearData.interest)}</td>
              <td>{convertUsdToInr(totalInterest)}</td>
              <td>{convertUsdToInr(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
