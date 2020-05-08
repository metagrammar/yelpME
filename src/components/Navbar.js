import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Search from "./onPageSearch";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		minHeight: 128,
		alignItems: "flex-start",
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2),
		backgroundColor: "transparent",
	},
	title: {
		flexGrow: 1,
		alignSelf: "center",
		color: "#999",
	},
	hiddenMobile: {
		display: "none",
	},
}));

function Navbar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='fixed' style={{ backgroundColor: "#f5f5f5" }}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='open drawer'
					>
						<MenuIcon />
					</IconButton>
					<Search />

					<IconButton
						aria-label='search'
						color='inherit'
						className={classes.hiddenMobile}
					>
						<SearchIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Navbar;
