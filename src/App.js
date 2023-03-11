import React from "react";
import BillManager from "./components/BillManager/BillManager";

import "./App.scss";
import pageData from "./assets/pageData.json";

const App = () => {
	return (
		<>
			<h1 className="header">
				Welcome to Bill Manager, build your ledger with ease!!
			</h1>
			<BillManager data={pageData.data} />
		</>
	);
};

export default App;
