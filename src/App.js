import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeContainer from "./components/IncomeContainer";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
	return (
		<GlobalProvider>
			<div className="expence-tracker">
				<Header />
				<Balance />
				<IncomeContainer />
				<TransactionList />
				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
