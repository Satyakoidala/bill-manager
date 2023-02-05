import React from "react";

import CreditDebitView from "../CreditDebitViewer/CreditDebitViewer";
import DisplayLedger from "../DisplayLedger/DisplayLedger";

const BillManager = ({ data = {} }) => {
	const { creditData, debitData, ledgerData } = data;

	return (
		<div className="bill-manager">
			<CreditDebitView creditData={creditData} debitData={debitData} />
			<DisplayLedger ledgerData={ledgerData} />
		</div>
	);
};

export default BillManager;
