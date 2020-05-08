import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardMedia, Hidden } from "@material-ui/core";
import Navbar from "./Navbar";
import ResultItem from "./ResultItem";
import { NavLink } from "react-router-dom";

// import ImageGrid from './ImageGrid';

const useStyles = makeStyles((theme) => ({
	media: {
		width: "100%",
		height: 500,
		paddingTop: "56.25%", // 16:9
		backgroundSize: "cover",
		overflow: "hidden",
	},
}));

function Results({ handleChange, handleSubmit, userInput }) {
	const classes = useStyles();
	return (
		<>
			<Navbar
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				userInput={userInput}
			/>

			<Grid container spacing={3} style={{ padding: 24, marginTop: "9em" }}>
				<Grid
					item
					container
					xs={12}
					sm={6}
					lg={6}
					style={{ height: "100vh", width: "50%" }}
				>
					<NavLink style={{ textDecoration: "none" }} to='/results/1'>
						<ResultItem />
					</NavLink>
					<NavLink style={{ textDecoration: "none" }} to='/results/2'>
						<ResultItem />
					</NavLink>
					<NavLink style={{ textDecoration: "none" }} to='/results/3'>
						{" "}
						<ResultItem />
					</NavLink>
					<NavLink style={{ textDecoration: "none" }} to='/results/4'>
						{" "}
						<ResultItem />
					</NavLink>
				</Grid>
				<Hidden xsDown>
					<Grid
						item
						container
						xs={4}
						sm={6}
						lg={6}
						style={{ height: 650, width: "50%", overflow: "hidden" }}
					>
						<CardMedia
							className={classes.media}
							image={require("../images/berlin.png")}
							title='Paella dish'
						/>
					</Grid>
				</Hidden>
			</Grid>
		</>
	);
}

export default Results;
