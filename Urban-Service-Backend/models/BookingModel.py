from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class Booking(BaseModel):
    service_id: str
    customer_id: str
    booking_date: datetime
    status: str  # e.g., "pending", "confirmed", "cancelled"
    payment_status: str  # e.g., "paid", "unpaid"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class BookingOut(Booking):
    id: str = Field(alias="_id")
