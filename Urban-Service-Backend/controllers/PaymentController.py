from fastapi import HTTPException
from models.PaymentModel import Payment
from config.database import db
from bson import ObjectId
from typing import List

# Collection reference
payments_collection = db["payments"]

# 🔹 Create a New Payment
async def addPayment(payment: Payment):
    payment_data = payment.dict()
    result = await payments_collection.insert_one(payment_data)
    payment_data["_id"] = str(result.inserted_id)
    return payment_data

# 🔹 Get All Payments
async def getAllPayments():
    payments = await payments_collection.find().to_list(100)
    for payment in payments:
        payment["_id"] = str(payment["_id"])
    return payments

# 🔹 Get a Single Payment by ID
async def getPayment(payment_id: str):
    payment = await payments_collection.find_one({"_id": ObjectId(payment_id)})
    if not payment:
        raise HTTPException(status_code=404, detail="Payment not found")
    payment["_id"] = str(payment["_id"])
    return payment

# 🔹 Update a Payment
async def updatePayment(payment_id: str, updated_payment: Payment):
    update_data = updated_payment.dict(exclude_unset=True)
    result = await payments_collection.update_one({"_id": ObjectId(payment_id)}, {"$set": update_data})

    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Payment not found or no changes made")

    updated_payment = await payments_collection.find_one({"_id": ObjectId(payment_id)})
    updated_payment["_id"] = str(updated_payment["_id"])
    return updated_payment

# 🔹 Delete a Payment
async def deletePayment(payment_id: str):
    result = await payments_collection.delete_one({"_id": ObjectId(payment_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Payment not found")
    return {"message": "Payment deleted successfully"}
