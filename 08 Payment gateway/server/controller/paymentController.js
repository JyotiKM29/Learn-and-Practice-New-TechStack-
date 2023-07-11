import { instance } from '../server.js';
import crypto from "crypto";
import { Payment } from '../model/paymentModel.js';

// Check out
export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };

    // Create an order
    const order = await instance.orders.create(options);
    console.log(order);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error creating order",
    });
  }
};

// Payment verification
export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Save payment details to the database
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      // Redirect to payment success page
      res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
    } else {
      res.status(400).json({
        success: false,
        error: "Payment verification failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error verifying payment",
    });
  }
};
