import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import classes from './SearchBar.module.css';

const SearchBar = (props) => {
    const history = useHistory();
    const [inputId, setInputId ] = useState("")

    const submitHandler = (event) => {

        event.preventDefault();
        if (inputId === "") {
            return
        }
        history.replace("/order")
        props.inputOrderId(inputId)
        setInputId("");
        
    }
    const onChangeHandler = (event) =>{
        const input = event.target.value;
        setInputId(input);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
          <input type="text" value={inputId} onChange={onChangeHandler} placeholder="Enter Order Code to search"></input>
          <button type="submit"><SearchRoundedIcon fontSize="small" /> </button>
        </form>
    )
}

export default SearchBar;