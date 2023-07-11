import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import axios from "axios";
// import Razorpay from 'razorpay';

// import Razorpay from 'razorpay';


const Home = () => {

    const checkoutHandler = async(amount) => {

     const {data: {key}} = await axios.get("http://localhost:4000/api/getkey");
 
      const {data: {order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
      })

    //   console.log(window);
    const options = {
        key, 
        amount: order.amount, 
        currency: "INR",
        name: "Jyoti Kumari",
        description: "RazorPay Gateway",
        image: "../Jyoti 2.jpeg",
        order_id: order.id, 
        callback_url:"http://localhost:4000/api/paymentverification",
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    // const paymentObject = new Razorpay(options);

    const razor = new window.Razorpay(options); 
    razor.open();

}

  return (
    <Box p={["1vh","10vh"]}>
      <Stack h={"100vh"} alignItems="center"  justifyContent="center" direction={['column' , 'row']} >
        <Card amount={250000} img={"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"} checkoutHandler={checkoutHandler}></Card>
        <Card amount={150000} img={"https://rukminim2.flixcart.com/image/850/1000/kc3p30w0/dslr-camera/d/g/p/eos-eos-1500d-canon-original-imafta9rswfqk3yz.jpeg?q=20"} checkoutHandler={checkoutHandler}></Card>
      </Stack>
    </Box>
  );
};

export default Home;
