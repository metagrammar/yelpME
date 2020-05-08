import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./components/search";
import { useState, useEffect } from "react";
import RestaurantPage from "./components/RestaurantPage";
import Results from "./components/Results";

import "./App.css";

function App() {
	const [userInput, setUserInput] = useState("");
	const [search, setSearch] = useState("");

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let value = userInput;
		setSearch(value);
		setUserInput("");
	};

	if (!search)
		return (
			<Container
				maxWidth='false'
				style={{
					background: "linear-gradient(to right, #8e9eab, #eef2f3)",
					height: "100vh",
				}}
			>
				<Grid
					item
					container
					justify='center'
					direction='column'
					alignItems='center'
					style={{ minHeight: "100vh" }}
				>
					<SearchBar
						handleChange={(e) => handleChange(e)}
						handleSubmit={(e) => handleSubmit(e)}
						userInput={userInput}
					/>
				</Grid>
			</Container>
		);

	return (
		<>
			<Results
				handleChange={(e) => handleChange(e)}
				handleSubmit={(e) => handleSubmit(e)}
				userInput={userInput}
			/>
			{/* <RestaurantPage
				handleChange={(e) => handleChange(e)}
				handleSubmit={(e) => handleSubmit(e)}
				userInput={userInput}
			/> */}
		</>
	);
}

export default App;
