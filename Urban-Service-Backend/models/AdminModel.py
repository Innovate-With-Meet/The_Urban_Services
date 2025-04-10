from pydantic import BaseModel, Field, validator
from bson import ObjectId
from typing import Optional
import bcrypt   # pip install bcrypt

class AdminUser(BaseModel):
    name: str
    email: str
    password: str
    address: Optional[str] = None  # Optional field for address
    profile_image: Optional[str] = None
    @validator("password", pre=True, always=True)
    def encrypt_password(cls, v):
        if v is None:
            return None
        return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    
class AdminUserOut(BaseModel):
    id: str = Field(alias="_id")
    name: str
    email: Optional[str] = None
    password: Optional[str] = None
    address: Optional[str] = None  # Optional field for address
    profile_image: Optional[str] = None    # Optional field for image

    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v
class AdminUserLogin(BaseModel):
    # adminId: str
    email: str
    password: str