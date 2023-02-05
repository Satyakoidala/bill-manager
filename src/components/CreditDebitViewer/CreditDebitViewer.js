import React from "react";
import RoundViewer from "../Common";

import "./CreditDebitViewer.scss";

const CreditDebitView = ({ creditData, debitData }) => {
	const { credit, creditAcquisitions } = creditData;
	const { debit, debitAcquisitions } = debitData;

	return (
		<div className="credit-debit-view">
			<RoundViewer price={credit} title="Total Credits" />
			<RoundViewer price={debit} title="Total Debits" />
		</div>
	);
};

export default CreditDebitView;
