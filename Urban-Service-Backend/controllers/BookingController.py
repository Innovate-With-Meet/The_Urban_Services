from fastapi import HTTPException
from models.BookingModel import Booking
from config.database import db
from bson import ObjectId
from typing import List

# Collection reference
bookings_collection = db["bookings"]

# 🔹 Create a New Booking
async def addBooking(booking: Booking):
    booking_data = booking.dict()
    result = await bookings_collection.insert_one(booking_data)
    booking_data["_id"] = str(result.inserted_id)
    return booking_data

# 🔹 Get All Bookings
async def getAllBookings():
    bookings = await bookings_collection.find().to_list(100)
    for booking in bookings:
        booking["_id"] = str(booking["_id"])
    return bookings

# 🔹 Get a Single Booking by ID
async def getBooking(booking_id: str):
    booking = await bookings_collection.find_one({"_id": ObjectId(booking_id)})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    booking["_id"] = str(booking["_id"])
    return booking

# 🔹 Update a Booking
async def updateBooking(booking_id: str, updated_booking: Booking):
    update_data = updated_booking.dict(exclude_unset=True)
    result = await bookings_collection.update_one({"_id": ObjectId(booking_id)}, {"$set": update_data})

    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found or no changes made")

    updated_booking = await bookings_collection.find_one({"_id": ObjectId(booking_id)})
    updated_booking["_id"] = str(updated_booking["_id"])
    return updated_booking

# 🔹 Delete a Booking
async def deleteBooking(booking_id: str):
    result = await bookings_collection.delete_one({"_id": ObjectId(booking_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Booking not found")
    return {"message": "Booking deleted successfully"}
