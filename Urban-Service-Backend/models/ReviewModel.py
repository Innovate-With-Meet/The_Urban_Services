<<<<<<< HEAD
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
=======
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
>>>>>>> 487dbc7a72b152e91eaf9da07a372b3610d3c52b
    id: str = Field(alias="_id")