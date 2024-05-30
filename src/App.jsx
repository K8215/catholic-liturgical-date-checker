import { React } from "react";
import "./App.css";
import Day from "./components/Day";
import Search from "./components/Search";

function App() {
	//Date calculations
	const dateObj = new Date();
	const urlMonth = dateObj.getMonth() + 1;
	const day = dateObj.getDate();
	const year = dateObj.getFullYear();
	const month = dateObj.toLocaleString("default", { month: "long" });
	//Date format for API endpoint
	const dateUrl = `${year}/${urlMonth}/${day}`;
	const tommorrowUrl = `${year}/${urlMonth}/${day + 1}`;
	const yesterdayUrl = `${year}/${urlMonth}/${day - 1}`;
	//Date format for presentation
	const todayDate = `${month} ${day}, ${year}`;
	const yesterdayDate = `${month} ${day - 1}, ${year}`;
	const tomorrowDate = `${month} ${day + 1}, ${year}`;

	return (
		<>
			<h1>Catholic Liturgical Date Checker</h1>
			<Search />
			<Day dateUrl={dateUrl} presentationDate={todayDate} title={"Today"} />
			<div className="halves">
				<Day
					dateUrl={yesterdayUrl}
					presentationDate={yesterdayDate}
					title={"Yesterday"}
				/>
				<Day
					dateUrl={tommorrowUrl}
					presentationDate={tomorrowDate}
					title={"Tomorrow"}
				/>
			</div>
			<div className="attribution">
				Liturgical Calendar APi courtesy of{" "}
				<a href="http://calapi.inadiutorium.cz/" target="_blank">
					calapi.inadiutorium.cz
				</a>
			</div>
		</>
	);
}

export default App;
