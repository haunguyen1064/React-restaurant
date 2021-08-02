import Card from '../UI/Card';
import classes from './Order.module.css';
import OrderItems from './OrderItems'
import Customer from './Customer'
import Errorpage from './404page'

import { useEffect, useState } from 'react';


const OrderTracking = (props) => {

    const [infor, setInfor] = useState({
        items: [],
        customer: {},
        totalAmount: null,
        renderOrderID:""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);
    const [isRedering, setIsRendering] = useState(false);


    useEffect(() => {
      setIsLoading(true);

        const fetchOrder = async () => {
          if (!props.id) {
            throw new Error();
          }
          const response = await fetch(
            `https://react-post-request-8c25d-default-rtdb.asia-southeast1.firebasedatabase.app/oder/${props.id}.json`
          );

          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const responseData = await response.json();

          if (responseData.error) {
            throw new Error()
          }
          
        setInfor((prev)=>{
              return {
            items: [...responseData.orderedItems],
            customer: {...responseData.user},
            totalAmount: responseData.totalAmount,
            renderOrderID: props.id
            }});
            setIsLoading(false);
            setHttpError(false);
        }

        fetchOrder().catch((error) => {
            setIsLoading(false);
            setHttpError(true);
        }).then(()=> {        
          setIsRendering(true)
        });

        const timer = setTimeout(() => {
          setIsRendering(false);
        }, 1000);

        return (() => {
          clearTimeout(timer);
        })
    },[props.id,])
      if (isLoading) {
        return (
          <section className={classes.orderLoading}>
            <p>Loading...</p>
          </section>
        );
      }
    
      const customerOrder = <>
      <h1>Your Order</h1>
      <Customer customerInfo ={infor}/>  
      <OrderItems orderInfor ={infor} />
      </>

      const sectionClases = `${classes.order} ${isRedering ? classes.fade : ''} `

  return (
    <section className={sectionClases}>
    <Card>
      {httpError ? <Errorpage/>: customerOrder}
    </Card>
    </section>
  );
};

export default  OrderTracking;