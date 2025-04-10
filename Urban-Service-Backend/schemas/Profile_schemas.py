from pydantic import BaseModel
from typing import Optional

class UpdateProfileSchema(BaseModel):
    address: Optional[str]
    phone: Optional[str]
    image: Optional[str]  # URL of uploaded image
