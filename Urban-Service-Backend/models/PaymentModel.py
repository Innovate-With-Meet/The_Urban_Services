from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class Payment(BaseModel):
    booking_id: str
    amount: float
    payment_method: str  # e.g., "credit_card", "paypal", "UPI"
    transaction_id: str
    status: str  # e.g., "pending", "completed", "failed"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class PaymentOut(Payment):
    id: str = Field(alias="_id")
