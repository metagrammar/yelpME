import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const HeaderOne = ({ text }) => {
	return (
		<Typography
			variant='h1'
			component='h2'
			gutterBottom
			align='center'
			styles={{ color: "white" }}
		>
			{text}
		</Typography>
	);
};

export default HeaderOne;
