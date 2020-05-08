import React, { Component } from "react";
import Search from "./onPageSearch";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ImageSlider from "./ImageSlider";

const useStyles = makeStyles({
	title: {
		fontSize: "2rem",
		paddingBottom: "40px",
		paddingTop: "40px",
		textTransform: "uppercase",
	},

	search: {
		padding: "40px",
	},

	text: {
		fontsize: "1.2rem",
		lineHeight: "1.8rem",
	},

	sideText: { paddingBottom: "40px", paddingTop: "40px" },
});

const RestaurantPage = ({ handleChange, userInput, handleSubmit }) => {
	const classes = useStyles();
	return (
		<div>
			<Container
				className={classes.search}
				maxWidth='false'
				style={{
					background: "linear-gradient(to right, #8e9eab, #eef2f3)",
					height: "200px",
					boxShadow: "0px 9px 62px -24px rgba(0,0,0,0.75)",
				}}
			>
				<Search
					handleChange={(e) => handleChange(e)}
					handleSubmit={(e) => handleSubmit(e)}
					userInput={userInput}
				></Search>
			</Container>

			<ImageSlider />

			<Container maxWidth='lg' styles={{ background: "white" }}>
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Typography className={classes.title}>
							{" "}
							/*** Restaurant Name /{" "}
						</Typography>
						<Typography className={classes.text}>
							Bacon ipsum dolor amet short ribs t-bone corned beef fatback.
							Turducken buffalo drumstick tri-tip short ribs capicola sirloin,
							filet mignon doner. Porchetta ham hock drumstick rump swine.
							Boudin pork swine capicola, meatloaf pancetta cupim shank. Kevin
							ham hock fatback prosciutto porchetta chislic sausage ball tip.
							Ground round pancetta tenderloin shank meatball ham, flank pig
							porchetta beef beef ribs shankle. Capicola swine short ribs shank
							beef ribs prosciutto. Beef bresaola swine pig beef ribs. Filet
							mignon drumstick corned beef, bresaola fatback shoulder shankle
							cupim ribeye capicola beef ribs. Sausage chislic strip steak cow
							ham hock meatloaf meatball shoulder, frankfurter ribeye andouille
							ham prosciutto picanha. Chicken ribeye sirloin meatball burgdoggen
							flank. Prosciutto short loin bacon, short ribs boudin filet mignon
							tail hamburger bresaola meatball. Fatback hamburger ham hock
							boudin, chislic pancetta frankfurter. Kevin turkey picanha,
							pastrami drumstick pancetta frankfurter beef ribs kielbasa
							landjaeger sausage corned beef jerky strip steak turducken. Strip
							steak frankfurter buffalo venison burgdoggen rump. Swine sausage
							ball tip t-bone kielbasa meatloaf.
						</Typography>
					</Grid>
					<Grid item direction='column' xs={4} className={classes.sideText}>
						<Grid item className={classes.sideText}>
							<Typography>rating</Typography>
						</Grid>
						<Grid item className={classes.sideText}>
							<Typography>money</Typography>
						</Grid>
						<Grid item className={classes.sideText}>
							<Typography>address</Typography>
						</Grid>
						<Grid item className={classes.sideText}>
							<Typography>phone</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default RestaurantPage;
