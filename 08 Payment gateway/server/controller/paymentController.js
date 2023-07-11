import { instance } from '../server.js';


// Check out
export const checkout = async(req, res) => {

    const options = {
        amount: Number(req.body.amount * 100) , // amount in the smallest currency unit
        currency: "INR",
        // receipt: "order_rcptid_11"
      };


      //  order is created
      const order = await instance.orders.create(options);

      console.log(order);

      res.status(200).json({
        success: true,
        order,
      });
};


// paymentVerification
export const  paymentVerification = async(req, res) => {
    console.log(req.body);
    

    res.status(200).json({
      success: true,
      
    });
};