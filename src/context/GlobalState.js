import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial State
const initialState = {
	transactions:
		localStorage.getItem("expenses-app") !== null
			? [...JSON.parse(localStorage.getItem("expenses-app"))]
			: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	function deleteTransaction(id) {
		dispatch({
			type: "DELETE_TRANSACTION",
			payload: id,
		});
		const transToRemove = state.transactions;
		const filterdTransaction = transToRemove.filter((item) => item.id !== id);
		localStorage.removeItem("expenses-app");
		localStorage.setItem("expenses-app", JSON.stringify(filterdTransaction));
	}

	function addTransaction(transaction) {
		dispatch({
			type: "ADD_TRANSACTION",
			payload: transaction,
		});
		const transToSave = [...state.transactions, transaction];
		localStorage.setItem("expenses-app", JSON.stringify(transToSave));
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
