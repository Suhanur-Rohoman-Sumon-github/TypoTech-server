import express from 'express'
import { paymentsControllers } from './payments.controller'


const router = express.Router()


router.post("/create-payment-intent",paymentsControllers.createPaymentIntent)

export const PaymentsRoute = router