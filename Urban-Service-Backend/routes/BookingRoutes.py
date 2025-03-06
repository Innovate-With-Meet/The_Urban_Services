from fastapi import APIRouter
from controllers.BookingController import addBooking, getAllBookings, getBooking, updateBooking, deleteBooking
from models.BookingModel import Booking

router = APIRouter()

@router.post("/booking/")
async def post_booking(booking: Booking):
    return await addBooking(booking)

@router.get("/bookings/")
async def get_bookings():
    return await getAllBookings()

@router.get("/booking/{booking_id}")
async def get_booking(booking_id: str):
    return await getBooking(booking_id)

@router.put("/booking/{booking_id}")
async def put_booking(booking_id: str, booking: Booking):
    return await updateBooking(booking_id, booking)

@router.delete("/booking/{booking_id}")
async def delete_booking(booking_id: str):
    return await deleteBooking(booking_id)
