import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { Grid, InputBase, Button, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        display: 'flex',
      },
      button: {
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      inputRoot: {
        color: 'inherit',
        alignSelf: 'flex-start',
      },
      inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        height: 50,
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    },
  }));



const SearchInput = ({ placeholder }) => {
    
  const classes = useStyles();  // For getting styles declared above
  const [userInput, setUserInput] = useState('') // Delcaring the State

  const handleUserInputChange = (e) => {
      if(e.target.value !== 0) {
          setUserInput(e.target.value); 
      } else {
        e.preventDefault()
          alert('Common Bud, tell us where you wanna eat.')
          
          }
    }

  const history = useHistory();

  const returnCityResult = e => {
      history.push(`/${userInput}`)
    }

    const enterKeyInput = e => {
      if (e.keyCode === 13){
        returnCityResult();
      }
    }

   return (
    <>
      <form className={classes.root} >
          <Grid container item 
          direction='row' 
          justify='space-between' 
          alignItems='center'
          style={{height: 50, minWidth: 280,}}
          >
                <InputBase 
                placeholder={placeholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                style={{background: 'rgba(255,255,255,0.9)', borderRadius: 2, width: '78%', height: '100%', alignSelf: 'flex-start',  paddingLeft: 10}}
                value={userInput}
                onChange={handleUserInputChange}
                onKeyDown={enterKeyInput}
                /> 
                <Button
                    variant="contained"
                    className={{root: classes.button}}
                    style={{height: '100%', width: '22%', padding: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, boxShadow: 'none',}}
                    onClick={() => returnCityResult()}
                    
                >
                  <Icon>search</Icon>
                </Button>
        </Grid>
      </form>
    </>
  );

}

export default SearchInput