import React, { useEffect, useState } from "react";

export default function Day(props) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getToday() {
			try {
				const res = await fetch(
					`http://calapi.inadiutorium.cz/api/v0/en/calendars/default/${props.dateUrl}`
				);
				if (!res.ok) {
					throw new Error("Invalid date or data not available");
				}
				const json = await res.json();

				setData(json);
				setError(null); // Reset error state if successful response
			} catch (err) {
				setError(err); // Set entire error object
			}
		}
		getToday();
	}, [props.dateUrl]);

	return (
		<>
			{error && (
				<div className="error-message">
					<p>Error: {error.message}</p>
				</div>
			)}
			{data && (
				<div className="day-block">
					{props.title && <h3>{props.title}</h3>}
					{props.presentationDate && <p>{props.presentationDate}</p>}

					<ul className="celebrations">
						{data.celebrations.map((celebration, index) => (
							<li className="celebration" key={index}>
								{celebration.title}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
}
