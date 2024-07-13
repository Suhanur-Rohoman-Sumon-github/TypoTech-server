import config from "../../config";
import Stripe from 'stripe';

const createPaymentIntentInDb = async (price: number) => {
    if (!config.stripe_access_key) {
        throw new Error('Stripe secret key is not set in the environment variables');
    }

    const stripeApiVersion = "2023-10-16";
    const stripe = new Stripe(config.stripe_access_key, {
       
    });

    // Convert price to the smallest unit (cents) and round to the nearest integer
    const amount = Math.round(price * 100);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return {
            clientSecret: paymentIntent.client_secret,
        };
    } catch (error) {
        console.error('Error creating payment intent:', error);
        throw error;
    }
};

export const paymentService = {
    createPaymentIntentInDb
};
