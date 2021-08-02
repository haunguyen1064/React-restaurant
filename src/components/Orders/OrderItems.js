import React, { Fragment } from "react";
import classes from "./Order.module.css";

const OrderItems = (props) => {
  return (
    <Fragment>
      {props.orderInfor.items.map((item) => {
        return (
          <div className={classes["order-item"]} key={item.id}>
            <p className={classes.itemName}>{item.name}</p>
            <li>
              <span className={classes.price}>${item.price}</span>
              <span className={classes.amount}>x {item.amount}</span>
              <span className={classes.total}>
                {" "}
                ${(item.price * item.amount).toFixed(2)}{" "}
              </span>
            </li>
          </div>
        );
      })}
      <div className={classes.totalAmount}>
        <h3>Total Price:</h3>{" "}
        <h3 className={classes.total}>${props.orderInfor.totalAmount}</h3>
      </div>
    </Fragment>
  );
};

export default OrderItems;
