from fastapi import APIRouter
from controllers.PaymentController import addPayment, getAllPayments, getPayment, updatePayment, deletePayment
from models.PaymentModel import Payment

router = APIRouter()

@router.post("/payment/")
async def post_payment(payment: Payment):
    return await addPayment(payment)

@router.get("/payments/")
async def get_payments():
    return await getAllPayments()

@router.get("/payment/{payment_id}")
async def get_payment(payment_id: str):
    return await getPayment(payment_id)

@router.put("/payment/{payment_id}")
async def put_payment(payment_id: str, payment: Payment):
    return await updatePayment(payment_id, payment)

@router.delete("/payment/{payment_id}")
async def delete_payment(payment_id: str):
    return await deletePayment(payment_id)
