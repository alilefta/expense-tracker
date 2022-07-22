import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const IncomeContainer = () => {
	const { transactions } = useContext(GlobalContext);

	const income = transactions
		.filter((item) => item.amount > 0)
		.reduce((acc, item) => (acc += item.amount), 0)
		.toFixed(2);
	const expense = transactions
		.filter((item) => item.amount < 0)
		.reduce((acc, item) => (acc += Math.abs(item.amount)), 0)
		.toFixed(2);
	return (
		<div className="income-exp-container">
			<div className="income">
				<h4>Income</h4>
				<p className="money plus">${income}</p>
			</div>
			<div className="expense">
				<h4>Expense</h4>
				<p className="money minus">${expense}</p>
			</div>
		</div>
	);
};
export default IncomeContainer;
