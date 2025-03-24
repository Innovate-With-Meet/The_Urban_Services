from pydantic import BaseModel, Field, validator
from bson import ObjectId
from typing import Optional
import bcrypt   # pip install bcrypt

class AdminUser(BaseModel):
    adminId: str
    name: str
    email: str
    password: str

    @validator("password", pre=True, always=True)
    def encrypt_password(cls, v):
        if v is None:
            return None
        return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
    
class AdminUserOut(BaseModel):
    id: str = Field(alias="_id")
    adminId: str
    name: str
    email: Optional[str] = None
    password: Optional[str] = None
    
    @validator("id", pre=True, always=True)
    def convert_objectId(cls, v):
        if isinstance(v, ObjectId):
            return str(v)
        return v
class AdminUserLogin(BaseModel):
    adminId: str
    email: str
    password: str