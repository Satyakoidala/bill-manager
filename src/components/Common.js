import React from "react";

import "./Common.scss";

const roundViewer = ({ price, title }) => {
	return (
		<div className="round-viewer">
			<div className="round">
				<span className="price">{price}</span>
			</div>
			<div className="display-title"> {title} </div>
		</div>
	);
};

export const TableViewer = ({ data = {} }) => {
	const { title, tableHeaders = [], tableData = [] } = data;

	return (
		<div className="table-view">
			<h2>{title}</h2>
			<table>
				<thead>
					<tr>
						{tableHeaders.map((header, key) => {
							return <th key={key + 1}>{header}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{tableData.map((rowData, key) => {
						return (
							<tr key={key}>
								{tableHeaders.map((header, index) => {
									return (
										<td key={index}>{rowData[header]}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default roundViewer;
