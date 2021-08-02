import React, { Fragment } from "react";
import classes from "./Customer.module.css";

const Customer = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
      <h3>Your order number:  <code>{props.customerInfo.renderOrderID}</code></h3>
        <p>Name: {props.customerInfo.customer.name}</p>
        <p>
          Address: {props.customerInfo.customer.street},{" "}
          {props.customerInfo.customer.city}
        </p>
        <p>Postal Code: {props.customerInfo.customer.postalCode}</p>
        <p>
          Order status: <span className={classes.status}>Processing...</span>
        </p>
      </div>
    </Fragment>
  );
};

export default Customer;
