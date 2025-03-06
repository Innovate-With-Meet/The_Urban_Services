<<<<<<< HEAD
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
=======
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
>>>>>>> 487dbc7a72b152e91eaf9da07a372b3610d3c52b
