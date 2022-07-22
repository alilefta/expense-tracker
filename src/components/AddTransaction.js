import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const { addTransaction } = useContext(GlobalContext);
	const handleSubmit = (event) => {
		event.preventDefault();
		if (amount !== 0 && text !== "") {
			addTransaction({
				id: new Date().getTime().toString(),
				text,
				amount: +amount,
			});
			setAmount(0);
			setText("");
		}
	};
	return (
		<div className="add-transaction">
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						placeholder="Enter text..."
						onChange={(e) => setText(e.target.value)}
						value={text}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						placeholder="Enter amount..."
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};

export default AddTransaction;
