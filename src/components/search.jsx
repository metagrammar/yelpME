import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import HeaderOne from "./utils/header1";
import SearchButton from "./utils/SearchButton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(0),
			width: "50ch",
		},
		borderColor: "white",
	},

	input: {
		color: "white",
	},
}));

const SearchBar = (props) => {
	const classes = useStyles();
	return (
		<Grid container alignItems='center' direction='column' justify='center'>
			<HeaderOne text={"Whadda Ya Wanna eat Bud'?"} />
			<form
				onSubmit={(e) => props.handleSubmit(e)}
				className={classes.root}
				noValidate
				autoComplete='off'
			>
				<Grid container direction='column'>
					<TextField
						id='outlined-basic'
						label='City Name'
						variant='outlined'
						onChange={(e) => props.handleChange(e)}
						value={props.userInput}
					/>
					<SearchButton type={"submit"} />
				</Grid>
			</form>
		</Grid>
	);
};

export default SearchBar;
