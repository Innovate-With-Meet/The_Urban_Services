from pydantic import BaseModel, Field, validator
from bson import ObjectId
from typing import Optional, List
from datetime import datetime

class Services(BaseModel):
    provider_id: str
    services_name: str
    price: float
    duration: int
    availability: bool
    categoryid_collection: List[str]  # Storing multiple category IDs
    subcategoryid_collection: List[str]  # Storing multiple subcategory IDs
    created_at: Optional[str] = None

    # Auto-generate created_at timestamp if not provided
    @validator("created_at", pre=True, always=True)
    def set_created_at(cls, v):
        return v or datetime.utcnow().isoformat()

class ServicesOut(BaseModel):
    id: str = Field(alias="_id")
    provider_id: str
    services_name: str
    price: float
    duration: int
    availability: bool
    categoryid_collection: List[str]
    subcategoryid_collection: List[str]
    created_at: Optional[str] = None

    # Convert ObjectId to string for MongoDB compatibility
    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v
