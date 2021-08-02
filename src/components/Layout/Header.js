import { Fragment } from 'react';
import {Link} from 'react-router-dom'

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import SearchBar from './SearchBar';

const Header = (props) => {

  const getInputOrderID= (inputID) => {
    props.inputID(inputID);
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/"><h1>ReactRestaurant</h1></Link>
        <SearchBar inputOrderId={getInputOrderID}/>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
