import { React, useState } from "react";
import Day from "./Day";

export default function Search() {
	const [searchDate, setSearchDate] = useState("");

	function handleSubmit() {
		const input = document.querySelector(".search-input");
		const userInput = input.value;
		setSearchDate(userInput);
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			handleSubmit();
		}
	}

	return (
		<div className="search">
			<h2>Date Search</h2>
			<p>
				Enter a date in numerical year/month/day format to return the
				celebrations for that day.
			</p>
			<div className="search-wrapper">
				<input
					className="search-input"
					type="text"
					placeholder="Example: 2024/08/28"
					onKeyDown={handleKeyDown}
				/>
				<input
					className="search-submit"
					type="submit"
					value="Submit"
					onClick={handleSubmit}
				/>
			</div>
			{searchDate && (
				<Day
					key={searchDate}
					dateUrl={searchDate}
					presentationDate={""}
					title={`Results for: ${searchDate}`}
				/>
			)}
		</div>
	);
}
