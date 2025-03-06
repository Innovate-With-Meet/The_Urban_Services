from pydantic import BaseModel, Field, conint
from typing import Optional
from datetime import datetime

class Review(BaseModel):
    service_id: str
    customer_id: str
    rating: int = Field(..., ge=1, le=5)  # Rating between 1 to 5
    review_text: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ReviewOut(Review):
    id: str = Field(alias="_id")