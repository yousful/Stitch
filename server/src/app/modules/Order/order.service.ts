import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import {
  initializePaystackTransaction,
  verifyPayment,
} from '../payment/paystackGateway'
import Product from '../Product/product.model'
import Store from '../User/store.model'
import Order from './order.model'
import Transaction from './transaction.model'
import { User } from '../User/user.model'
import OrderProduct from './order_product.model'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (body: any, orderInitiator: any) => {
  const { storeId, paymentMethod, orderCart, ...others } = body
  // Check if the store exists
  const storeExist = await Store.findById(storeId)
  if (!storeExist) {
    throw new AppError(
      httpStatus.NOT_ACCEPTABLE,
      'Store not found',
    )  }
  // Create the order
  const order = await Order.create({
    ...others,
    orderInitiator: orderInitiator.id,
  })
  // Check if all products exist and are available and link them to the order
  const productOrder = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    orderCart.map(async (item: any) => {
      const product = await Product.findOne({
        _id: item.productId,
        quantity: { $gt: 0 },
      })
      if (!product) {
        throw new AppError(
          httpStatus.NOT_ACCEPTABLE,
          'One or more products not found or are out of stock!!!',
        )
      }

      // Calculate the paid amount
      const paidAmount = product.cost * item.quantity

      // Link the product to the order
      const orderProduct = await OrderProduct.create({
        orderId: order.id,
        productId: item.productId,
        chosenSize: item.chosenSize,
        chosenStyle: item.chosenStyle,
        chosenColor: item.chosenColor,
        quantity: item.quantity,
        originalAmount: product.cost,
        amountPaid: paidAmount,
      })
      // Reduce the product quantity
      product.quantity -= item.quantity
      await product.save()
      return orderProduct
    }),
  )
  // Calculate the total amount
  const amount = productOrder
    .map((product: { amountPaid: number }) => product.amountPaid)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  await order.updateOne({ $set: { amount } })
  if (paymentMethod === 'paystack') {
    const user = await User.findById(orderInitiator.id)
    if (!user) {
      throw new AppError(httpStatus.NOT_ACCEPTABLE, 'User not found!!!')
    }
    // Initialize Paystack transaction
    const paystackTransaction = await initializePaystackTransaction(
      amount * 100,
      user.email,
    )
    console.log(amount)
    console.log(orderInitiator.email)
    console.log(paystackTransaction)
    if (!paystackTransaction) {
      throw new AppError(
        httpStatus.NOT_ACCEPTABLE,
        'Payment gateway failed to initialize',
      )
    }

    // Record the transaction
    await Transaction.create({
      paymentMethod: 'paystack',
      transactionId: paystackTransaction.reference,
      amount: amount,
      details: 'purchase',
      reference: paystackTransaction.data.reference,
      status: 'pending',
      buyer: orderInitiator.id,
      seller: storeExist.createdBy,
      order: order.id,
    })

    return {
      reference: paystackTransaction.data.reference,
      message: 'Order created successfully, proceed to verify payment.',
    }
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const verifyPaymentDone = async (reference: any) => {
  try {
    const data = await verifyPayment(reference.reference)
    if (data) {
      // Update the transaction status to 'paid'
      const receipt = await Transaction.findOne({
        reference: reference.reference,
      })
      if (!receipt) {
        throw new AppError(
          httpStatus.NOT_ACCEPTABLE,
          'Transaction not found!!!',
        )
      }

      // Update the status field
      await receipt.updateOne({ $set: { status: 'paid' } })
    }
  } catch (error) {
    console.error('Error verifying payment:', error)
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Payment verification failed',
    )
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllMyTransactions = async (userId: any) => {
  const user = await User.findById(userId)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!!!')
  }
  if (user.role === 'tailor') {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'Only ordinary user can use this route!!!',
    )
  }
  return Transaction.find({ buyer: userId }).populate('order').exec()
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAllTailorTransactions = async (userId: any) => {
  const user = await User.findById(userId)
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!!!')
  }
  console.log(user)
  if (user.role !== 'tailor') {
    throw new AppError(httpStatus.FORBIDDEN, 'You are not a tailor!!!')
  }
  return Transaction.find({ seller: userId }).populate('order').exec()
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTransactionDetails = async (transactionId: any) => {
  const transaction = await Transaction.findOne({
    _id: transactionId.transactionId,
  })
    .populate({
      path: 'order',
      populate: {
        path: 'orderProducts',
      },
    })
    .exec()

  return transaction
}

export const OrderService = {
  createOrder,
  verifyPaymentDone,
  getAllMyTransactions,
  getAllTailorTransactions,
  getTransactionDetails,
}
